const fs = require('fs');
const path = require('path');
const { locales } = require('./docusaurus.config').i18n;

const moveContents = (source, destination) => {
  const items = fs.readdirSync(source);

  items.forEach((item) => {
    const sourceItem = path.join(source, item);
    const destinationItem = path.join(destination, item);

    // If destination item exists, remove it
    if (fs.existsSync(destinationItem)) {
      if (fs.lstatSync(destinationItem).isDirectory()) {
        fs.rmdirSync(destinationItem, { recursive: true });
      } else {
        fs.unlinkSync(destinationItem);
      }
    }

    // Move the source item to the destination
    if (fs.lstatSync(sourceItem).isDirectory()) {
      fs.renameSync(sourceItem, destinationItem);
    } else {
      fs.copyFileSync(sourceItem, destinationItem);
    }
  });

  // Remove the now-empty source directory
  fs.rmdirSync(source, { recursive: true });
};

locales.forEach((locale) => {
  const basePath = `i18n/${locale}/docusaurus-plugin-content-docs`;

  moveContents(`${basePath}/current/docs`, `${basePath}/current`);
  moveContents(`${basePath}/versioned_docs`, basePath);
});
