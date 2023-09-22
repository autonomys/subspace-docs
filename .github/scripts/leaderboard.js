const axios = require('axios');
const fs = require('fs');
const { parse } = require('csv-parse');
const crypto = require('crypto');

const CONFIG = {
    CROWDIN_API_ENDPOINT: 'https://api.crowdin.com/api/v2',
    CROWDIN_PROJECT_ID: '604593',
    BLACKLISTED_CONTRIBUTORS_FILE: 'blacklisted-contributors.json',
    LEADERBOARD_FILE: 'leaderboard.json'
};

const CROWDIN_PERSONAL_TOKEN = process.env.CROWDIN_PERSONAL_TOKEN;

if (!CROWDIN_PERSONAL_TOKEN) {
    console.error('CROWDIN_PERSONAL_TOKEN is not set');
    process.exit(1);
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

async function getProjectMembers() {
    try {
        const response = await axios.get(`${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/members`, {
            headers: {
                'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`
            }
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

async function generateReport() {
    try {
        const response = await axios.post(`${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/reports`, {
            name: "top-members",
            schema: {
                unit: "words",
                format: "csv"
            }
        }, {
            headers: {
                'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`,
                'Content-Type': 'application/json'
            }
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
            const response = await axios.get(`${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/reports/${identifier}`, {
                headers: {
                    'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`
                }
            });

            reportStatus = response.data.data.status;
            if (reportStatus === 'finished') {
                const downloadResponse = await axios.get(`${CONFIG.CROWDIN_API_ENDPOINT}/projects/${CONFIG.CROWDIN_PROJECT_ID}/reports/${identifier}/download`, {
                    headers: {
                        'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`
                    }
                });
                return downloadResponse.data.data.url;
            } else {
                // Use delay here to avoid hitting the rate limit of the API
                await delay(2000); // adjust the delay as needed
            }
        } while (reportStatus !== 'finished');
    } catch (error) {
        console.error('Error in downloadReport:', error);
        throw error;
    }
}


function loadBlacklistedContributors() {
    try {
        return JSON.parse(fs.readFileSync(CONFIG.BLACKLISTED_CONTRIBUTORS_FILE, 'utf8'));
    } catch (error) {
        console.error('Error in loadBlacklistedContributors:', error);
        throw error;
    }
}

async function processCsvData(csvData, membersMapping) {
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
                records.forEach(record => {
                    const usernameFromCsv = extractUsername(record.Name);
                    const key = generateKey(usernameFromCsv);
                    if (membersMapping[key]) {
                        Object.assign(record, membersMapping[key]);
                    }
                });

                const blacklistedContributors = loadBlacklistedContributors();
                resolve(records.filter(record => !blacklistedContributors.includes(record.originalName)));
            });

            parser.write(csvData);
            parser.end();
        } catch (error) {
            console.error('Error in processCsvData:', error);
            reject(error);
        }
    });
}

function saveDataToJson(data) {
    try {
        fs.writeFileSync(CONFIG.LEADERBOARD_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error in saveDataToJson:', error);
        throw error;
    }
}

(async function main() {
    try {
        const membersMapping = await getProjectMembers();
        const reportIdentifier = await generateReport();
        const downloadUrl = await downloadReport(reportIdentifier);
        const csvDataResponse = await axios.get(downloadUrl);
        const leaderboardData = await processCsvData(csvDataResponse.data, membersMapping);
        saveDataToJson(leaderboardData);
    } catch (error) {
        console.error('Error in main function:', error);
    }
})();
