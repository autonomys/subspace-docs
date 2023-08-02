const fs = require('fs-extra');
const path = require('path');

// Import the docusaurus config
const docusaurusConfig = require('./docusaurus.config.js');

// Get the locales from the config
const locales = docusaurusConfig.i18n.locales;

async function copyDocsForLocalization() {
  for (const locale of locales) {
    const destination = path.join('i18n', locale, 'docusaurus-plugin-content-docs');

    // Copy the current docs
    await fs.copy('docs', path.join(destination, 'current'));

    // Get all directories in the versioned_docs folder
    const versionDirs = fs.readdirSync('versioned_docs').filter((file) =>
      fs.statSync(path.join('versioned_docs', file)).isDirectory()
    );

    // Copy each version directory
    for (const versionDir of versionDirs) {
      await fs.copy(
        path.join('versioned_docs', versionDir),
        path.join(destination, versionDir)
      );
    }
  }
}

copyDocsForLocalization().catch(console.error);
