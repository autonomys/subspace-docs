const fs = require('fs');
const path = require('path');
const { locales, defaultLocale } = require('../../docusaurus.config').i18n;

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

locales.filter((locale) => locale !== defaultLocale).forEach((locale) => {
  const basePath = `i18n/${locale}/docusaurus-plugin-content-docs`;

  // Move JSON files and other sections
  moveContents(`i18n/${locale}/i18n/en/docusaurus-plugin-content-docs`, basePath);
  moveContents(`i18n/${locale}/i18n/en/docusaurus-plugin-content-blog`, `i18n/${locale}/docusaurus-plugin-content-blog`);
  moveContents(`i18n/${locale}/i18n/en/docusaurus-theme-classic`, `i18n/${locale}/docusaurus-theme-classic`);
  fs.renameSync(`i18n/${locale}/i18n/en/code.json`, `i18n/${locale}/code.json`);

  // Remove now-empty sub-i18n folder
  fs.rmSync(`i18n/${locale}/i18n`, { recursive: true });

  // Move other contents
  moveContents(`${basePath}/current/docs`, `${basePath}/current`);
  fs.rmSync(`${basePath}/current/docs`, { recursive: true }); // Remove empty /docs folder

});

// Crowdin also downloads an "English" copy of every source file. Since the default locale
// is English and Docusaurus serves it directly from docs/, any file that lands in
// i18n/en/docusaurus-plugin-content-docs/current/ would silently override the real source.
// Delete the directory so the built site always reflects the actual docs/ content.
const enDocsPath = `i18n/${defaultLocale}/docusaurus-plugin-content-docs/current`;
if (fs.existsSync(enDocsPath)) {
  fs.rmSync(enDocsPath, { recursive: true });
}
