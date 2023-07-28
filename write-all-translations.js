const { exec } = require('child_process');
const { i18n } = require('./docusaurus.config');

const locales = i18n.locales;

locales.forEach(locale => {
  exec(`yarn write-translations --locale ${locale}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
});
