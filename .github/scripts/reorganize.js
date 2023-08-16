const fs = require('fs');
const path = require('path');
const { locales } = require('../../docusaurus.config').i18n;

const moveContents = (source, destination) => {
  if (!fs.existsSync(source)) return; // Skip if the source doesn't exist

  const items = fs.readdirSync(source);

  items.forEach((item) => {
    const sourceItem = path.join(source, item);
    const destinationItem = path.join(destination, item);

    if (fs.lstatSync(sourceItem).isDirectory()) {
      if (!fs.existsSync(destinationItem)) {
        fs.mkdirSync(destinationItem, { recursive: true });
      }
      moveContents(sourceItem, destinationItem);
      fs.rmSync(sourceItem, { recursive: true });
    } else {
      if (!fs.existsSync(path.dirname(destinationItem))) {
        fs.mkdirSync(path.dirname(destinationItem), { recursive: true });
      }
      fs.copyFileSync(sourceItem, destinationItem);
      fs.unlinkSync(sourceItem);
    }
  });
};

locales.forEach((locale) => {
  const basePath = `i18n/${locale}/docusaurus-plugin-content-docs`;

  // Move JSON files and other sections
  moveContents(`i18n/${locale}/i18n/en/docusaurus-plugin-content-docs`, basePath);
  moveContents(`i18n/${locale}/i18n/en/docusaurus-plugin-content-blog`, `i18n/${locale}/docusaurus-plugin-content-blog`);
  moveContents(`i18n/${locale}/i18n/en/docusaurus-theme-classic`, `i18n/${locale}/docusaurus-theme-classic`);
  fs.renameSync(`i18n/${locale}/i18n/en/code.json`, `i18n/${locale}/code.json`);

  // Remove now-empty sub-i18n folder
  fs.rmSync(`i18n/${locale}/i18n`, { recursive: true });

  // Move the version-latest folder to the same level as the current folder
  moveContents(`${basePath}/versioned_docs/version-latest`, `${basePath}/version-latest`);

  // Move other contents
  moveContents(`${basePath}/current/docs`, `${basePath}/current`);
  fs.rmSync(`${basePath}/current/docs`, { recursive: true }); // Remove empty /docs folder

  moveContents(`${basePath}/versioned_docs`, basePath);
  fs.rmSync(`${basePath}/versioned_docs`, { recursive: true }); // Remove empty /versioned_docs folder
});
