## Development

Once you are prepared to merge your changes to the repo, please ensure you check out the [CONTRIBUTION.md](/.github/CONTRIBUTION.md) for proper procedures

## Versioning & Localization

In our documentation we implement [docusaurus'](https://docusaurus.io/docs/versioning) versioning system. Additionally we also implement the [i18n Localization](https://docusaurus.io/docs/i18n/tutorial) feature of docusaurus as well. 

The best way to think about our documentation is as follows

- **Docs/**: The "source" documentation, this is where we will create new pages, and update for latest changes on our products. When the site is built this directory will be served as the "pre-release" version
- **Versioned_Docs/**: The versioned documentation, this is where you will find the latest stable release named "versioned-latest". When the site is built this directory will be served as the "latest" verison
- **i18n/**: The localized documentation, this is where the localized files will be stored. Note: These files are part of the .gitignore so they will only be downloaded on build time. More on how this process works in the [localization](###Localization) section below.  

### Cutting a new Version

When cutting a new version in docusaurus it pulls the files from the `/docs` folder and supplies them into the `/versioned_docs` folder. As we have a flattened version structure we only have two types of docs, `pre-release` and `latest` as such, we have built a custom command to cut new verions on our documentation. 

to cut a new version you will need to run a command from the project directory. Before cutting the version ensure all changes have been made to the core `docs` folder as described above.

```
yarn run version-update
```

This script is designed to manage the "latest" version of a Docusaurus project, performing several key actions:

1. **Deleting Specific Files and Folders**: 
   - Deletes the `versioned_docs/version-latest` folder.
   - Deletes the `versions.json` file.
   - Deletes the `versioned_sidebars/version-latest-sidebars.json` file.

2. **Modifying Configuration File**: 
   - Modifies the `docusaurus.config.js` file by commenting out the sections related to the "latest" version.

3. **Running Docusaurus Command**: 
   - Executes an internal Docusaurus command to create a new version of the documentation.

4. **Reverting Configuration Changes**: 
   - After the new version is created, the script uncomments the previously commented sections in the `docusaurus.config.js` file, reverting it back to its original state.

Overall, this script facilitates the handling of the latest version in the Docusaurus documentation system, streamlining the process of deletion, creation, and modification as required. It ensures that the documentation maintains a consistent and controlled structure across different versions.

### Localization

Localization is managed with the [i18n docusaurus plugin](https://docusaurus.io/docs/versioning) in conjunction with the [Crowdin translation portal](https://support.crowdin.com/translation-process-overview/).

**Our localization works in two parts**

1. **i18n Plugin**: This plugin loads translated data for each language and allows the user to select which language they prefer. This plugin also handles all of the routing, and [code adjustment for static react pages](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code) on our documentation, aswell as [generate .json string](https://docusaurus.io/docs/i18n/tutorial#translate-plugin-data) files for other non-markdown pages. Additoinally it will help us in managing [translated .md files](https://docusaurus.io/docs/i18n/tutorial#translate-markdown-files)

2. **Crowdin Translation Portal**: This 3rd party tool assists us in uploading our files to a dedicated platform to host translations from the broader community. Additionally, it has a cli, and crowdin.yml that is used for configuration of where from and where to take files that are configured. 

## Local Development

Install the required packages
```
yarn
```

Start a local development server
```
yarn start
```

> This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

If you are working with different languages you will need to either 

a) Build the server and serve it with `yarn build` && `yarn serve`
b) Run the dev server for each language with `yarn start -- --locale en` (Replace 'en' with the two letter code of whichever language you are working with)

### Deploy (Staff Use Only)

While the section below may still be useful, its worth noting that we have automated this process with github actions, now a build we automatically be deployed anytime a push is made to main, aswell as once every 24hr's

If you would like to manually deploy for whatever reason you can still use the instructions below. 

1. Checkout to `main` branch.
```
git checkout main
```

2. Ensure the build is working on a production build.
```
yarn build
```
> This command generates static content into the `build` directory and will optimize any links, content, & documents.

3. Deploy `main` to `gh-pages` branch with the below command.
```
GIT_USER=<Your GitHub username> yarn deploy
```
