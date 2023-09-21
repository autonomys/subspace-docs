const axios = require('axios');
const fs = require('fs');
const parse = require('csv-parse');

const CROWDIN_API_ENDPOINT = 'https://api.crowdin.com/api/v2';
const CROWDIN_PROJECT_ID = '604593';
const CROWDIN_PERSONAL_TOKEN = process.env.CROWDIN_PERSONAL_TOKEN;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getProjectMembers() {
    try {
        const response = await axios.get(`${CROWDIN_API_ENDPOINT}/projects/${CROWDIN_PROJECT_ID}/members`, {
            headers: {
                'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`
            }
        });

        let membersMapping = {};
        response.data.data.forEach(member => {
            membersMapping[member.data.username] = {
                id: member.data.id,
                avatarUrl: member.data.avatarUrl
            };
        });
        return membersMapping;
    } catch (error) {
        console.error('Error fetching project members:', error);
        throw error;
    }
}

async function generateReport() {
    try {
        const response = await axios.post(`${CROWDIN_API_ENDPOINT}/projects/${CROWDIN_PROJECT_ID}/reports`, {
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
        console.error('Error generating report:', error);
        throw error;
    }
}

async function downloadReport(identifier) {
    try {
        const response = await axios.get(`${CROWDIN_API_ENDPOINT}/projects/${CROWDIN_PROJECT_ID}/reports/${identifier}/download`, {
            headers: {
                'Authorization': `Bearer ${CROWDIN_PERSONAL_TOKEN}`
            }
        });
        return response.data.data.url;
    } catch (error) {
        console.error('Error downloading report:', error);
        throw error;
    }
}

function loadBlacklistedContributors() {
    return JSON.parse(fs.readFileSync('blacklisted-contributors.json', 'utf8'));
}


function processCsvData(csvData, membersMapping) {
    return new Promise((resolve, reject) => {
        const records = [];
        const parser = parse({ columns: true, skip_empty_lines: true });

        parser.on('readable', function() {
            let record;
            while ((record = parser.read()) !== null) {
                records.push(record);
            }
        });

        parser.on('error', function(err) {
            console.error('Error during CSV parsing:', err.message);
            reject(err);
        });

        parser.on('end', function() {
            console.log('CSV parsing completed. Total records:', records.length);
            
            // Incorporate the user IDs and avatars from the membersMapping
            records.forEach(record => {
                if (membersMapping[record.Name]) {
                    record.userId = membersMapping[record.Name].id;
                    record.avatarUrl = membersMapping[record.Name].avatarUrl;
                }
            });

            const blacklistedContributors = loadBlacklistedContributors();
            console.log('Blacklisted contributors:', blacklistedContributors);

            // Filter out blacklisted contributors
            const filteredRecords = records.filter(record => !blacklistedContributors.includes(record.Name));
            console.log('Filtered records count (after removing blacklisted contributors):', filteredRecords.length);
            
            resolve(filteredRecords);
        });

        // Provide the CSV data to the parser
        console.log('Starting CSV parsing...');
        parser.write(csvData);
        parser.end();
    });
}



function saveDataToJson(data) {
    fs.writeFileSync('leaderboard.json', JSON.stringify(data, null, 2), 'utf8');
}

(async function main() {
    try {
        const membersMapping = await getProjectMembers();
        const reportIdentifier = await generateReport();
        await delay(5000);  // Wait for 5 seconds before downloading the report
        const downloadUrl = await downloadReport(reportIdentifier);
        const csvDataResponse = await axios.get(downloadUrl); // Fetch the CSV data
        const leaderboardData = processCsvData(csvDataResponse.data, membersMapping); // Process the CSV data
        saveDataToJson(leaderboardData);
    } catch (error) {
        console.error('Error in main function:', error);
    }
})();
