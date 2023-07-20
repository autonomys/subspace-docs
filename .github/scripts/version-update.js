const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Define the project root directory
const projectRoot = path.resolve(__dirname, '..', '..');

// Define the paths of the files to delete
const filesToDelete = [
  'versions.json',
  'versioned_docs/version-latest',
  'versioned_sidebars/version-latest-sidebars.json'
];

// Delete the 'latest' version
filesToDelete.forEach(relativePath => {
  const absolutePath = path.join(projectRoot, relativePath);
  try {
    console.log("Deleting:", relativePath);
    fs.removeSync(absolutePath);
    console.log('Successfully deleted:', relativePath);
  } catch (error) {
    console.error(`Error while deleting ${relativePath}: ${error}`);
  }
});

const configFile = path.join(projectRoot, 'docusaurus.config.js');

// Read the configuration file
let config = fs.readFileSync(configFile, 'utf-8');

// Comment out the 'latest' version
config = config.replace(/(\s*\/\/Versioning Preferences[\s\S]*?\},\s*\},)/g, '/*$1*/');

// Write the modified configuration back to the file
fs.writeFileSync(configFile, config, 'utf-8');

console.log('Successfully commented out the latest version in docusaurus.config.js');

// Run the docusaurus docs:version latest command
execSync('yarn docusaurus docs:version latest', { stdio: 'inherit' });

// Read the configuration file again
config = fs.readFileSync(configFile, 'utf-8');

// Uncomment the 'latest' version
config = config.replace(/\/\*(\s*\/\/Versioning Preferences[\s\S]*?\},\s*\},)\*\//gs, '$1');

// Write the modified configuration back to the file
fs.writeFileSync(configFile, config, 'utf-8');

console.log('Successfully uncommented the latest version in docusaurus.config.js');
