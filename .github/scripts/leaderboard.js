const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const { parse } = require('csv-parse');
const crypto = require('crypto');

const CONFIG = {
    CROWDIN_API_ENDPOINT: process.env.CROWDIN_API_ENDPOINT || 'https://api.crowdin.com/api/v2',
    CROWDIN_PROJECT_ID: process.env.CROWDIN_PROJECT_ID || '604593',
    BLACKLISTED_CONTRIBUTORS_FILE: process.env.BLACKLISTED_CONTRIBUTORS_FILE || './.github/scripts/blacklisted-contributors.json',
    LEADERBOARD_FILE: process.env.LEADERBOARD_FILE || './src/components/TranslationLeaderboard/leaderboard',
    RETRY_DELAY: parseInt(process.env.RETRY_DELAY) || 2000,
    MAX_RETRIES: parseInt(process.env.MAX_RETRIES) || 5,
    HTTP_TIMEOUT: parseInt(process.env.HTTP_TIMEOUT) || 10000,
};

const CROWDIN_PERSONAL_TOKEN = process.env.CROWDIN_PERSONAL_TOKEN;
if (!CROWDIN_PERSONAL_TOKEN) {
    console.error('CROWDIN_PERSONAL_TOKEN is not set');
    process.exit(1);
}

let date = new Date(); 

// the next line is temporary, if accidentally merged needs to be deleted. 
date.setMonth(date.getMonth() - 1);

// next function is temporary, if accidentally merged needs to be deleted.
function last_day_of_2023() {
    return `2023-12-31T00:00:00+00:00`
}

// temporary variable
const lastDayOf2023 = last_day_of_2023()

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeRequest(method, url, config = {}) {
    let retries = 0;
    while (retries < CONFIG.MAX_RETRIES) {
        try {
            return await axios({ method, url, timeout: CONFIG.HTTP_TIMEOUT, ...config });
        } catch (error) {
            if (error.response && error.response.status === 429) {
                const delayAmount = CONFIG.RETRY_DELAY * Math.pow(2, retries) * (1 + Math.random());
                await delay(delayAmount);
                retries++;
            } else {
                console.error('Detailed Error:', error);
                throw error;
            }
        }
    }
    throw new Error('Maximum retry limit reached');
}

function normalizeString(str) {
    return str.normalize('NFC').trim();
}

function extractUsername(name) {
    const match = name.match(/\(([^)]+)\)/);
    return match && match[1] ? normalizeString(match[1]) : normalizeString(name);
}

function generateKey(name) {
    const normalized = normalizeString(name);
    return crypto.createHash('sha256').update(normalized).digest('hex');
}

function formatDateToBeginningOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() is zero-indexed

    console.log(year)
    return `${year}-${month.toString().padStart(2, '0')}-01T00:00:00+00:00`;
}

const formattedDate = formatDateToBeginningOfMonth(date);

async function getProjectMembers() {
    try {
        const response = await makeRequest('get', `${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/members`, {
            headers: { 'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}` }
        });
        return response.data.data.reduce((mapping, member) => {
            const originalName = member.data.username;
            const key = generateKey(originalName);
            mapping[key] = {
                originalName: originalName,
                id: member.data.id,
                avatarUrl: member.data.avatarUrl,
                hashKey: key
            };
            return mapping;
        }, {});
    } catch (error) {
        console.error('Error in getProjectMembers:', error);
        throw error;
    }
}



async function generateMonthlyReport() {
    try {
        const response = await makeRequest('post', `${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/reports`, {
            data: {
                name: "top-members",
                schema: { unit: "words", format: "csv", dateFrom: formattedDate, dateTo: lastDayOf2023 }
            },
            headers: { 'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`, 'Content-Type': 'application/json' }
        });
        return response.data.data.identifier;
    } catch (error) {
        console.error('Error in generateReport:', error);
        throw error;
    }
}

async function generateAllTimeReport() {
    try {
        const response = await makeRequest('post', `${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/reports`, {
            data: {
                name: "top-members",
                schema: { unit: "words", format: "csv" }
            },
            headers: { 'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`, 'Content-Type': 'application/json' }
        });
        return response.data.data.identifier;
    } catch (error) {
        console.error('Error in generateReport:', error);
        throw error;
    }
}

async function downloadReport(identifier) {
    try {
        let reportStatus = '';
        do {
            const response = await makeRequest('get', `${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/reports/${identifier}`, {
                headers: { 'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}` }
            });
            reportStatus = response.data.data.status;
            if (reportStatus === 'finished') {
                const downloadResponse = await makeRequest('get', `${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/reports/${identifier}/download`, {
                    headers: { 'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}` }
                });
                return downloadResponse.data.data.url;
            } else {
                await delay(CONFIG.RETRY_DELAY);
            }
        } while (reportStatus !== 'finished');
    } catch (error) {
        console.error('Error in downloadReport:', error);
        throw error;
    }
}

async function loadBlacklistedContributors() {
    try {
        const data = await fs.readFile(CONFIG.BLACKLISTED_CONTRIBUTORS_FILE, 'utf8');
        const blacklistedSet = new Set(JSON.parse(data));
        return blacklistedSet;
    } catch (error) {
        console.error('Error in loadBlacklistedContributors:', error);
        throw error;
    }
}

async function processCsvData(csvData, membersMapping, blacklistedContributors) {
    return new Promise((resolve, reject) => {
        try {
            const records = [];
            const parser = parse({ columns: true, skip_empty_lines: true });
            parser.on('readable', function () {
                let record;
                while ((record = parser.read()) !== null) {
                    records.push(record);
                }
            });
            parser.on('end', function () {
                const filteredRecords = records.filter(record => {
                    const usernameFromCsv = extractUsername(record.Name);
                    const key = generateKey(usernameFromCsv);
                    if (membersMapping[key]) {
                        Object.assign(record, membersMapping[key]);
                    }
                    const isBlacklisted = blacklistedContributors.has(record.originalName); // Check if originalName is blacklisted
                    if(isBlacklisted) console.log('Filtered out blacklisted contributor:', record.originalName); // Log if a blacklisted contributor is filtered out
                    return !isBlacklisted;
                });
                resolve(filteredRecords);
            });
            parser.write(csvData);
            parser.end();
        } catch (error) {
            console.error('Error in processCsvData:', error);
            reject(error);
        }
    });
}

async function saveDataToJson(data, filePath) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error in saveDataToJson:', error);
        throw error;
    }
}


(async function main() {
    try {
        // Load blacklisted contributors and project members
        const blacklistedContributors = await loadBlacklistedContributors();
        const membersMapping = await getProjectMembers();

        // Generating and processing the all-time report
        const allTimeReportIdentifier = await generateAllTimeReport();
        const allTimeDownloadUrl = await downloadReport(allTimeReportIdentifier);
        const allTimeCsvDataResponse = await makeRequest('get', allTimeDownloadUrl);
        const allTimeLeaderboardData = await processCsvData(allTimeCsvDataResponse.data, membersMapping, blacklistedContributors);
        await saveDataToJson(allTimeLeaderboardData, `${CONFIG.LEADERBOARD_FILE}.json`); // Save the all-time data

        // Generating and processing the monthly report
        const monthlyReportIdentifier = await generateMonthlyReport();
        const monthlyDownloadUrl = await downloadReport(monthlyReportIdentifier);
        const monthlyCsvDataResponse = await makeRequest('get', monthlyDownloadUrl);
        const monthlyLeaderboardData = await processCsvData(monthlyCsvDataResponse.data, membersMapping, blacklistedContributors);
        await saveDataToJson(monthlyLeaderboardData, `${CONFIG.LEADERBOARD_FILE}-monthly.json`); // Save the monthly data

    } catch (error) {
        console.error('Error in main function:', error);
    }
})();

