## Development

Once you are prepared to merge your changes to the repo, please ensure you check out the [CONTRIBUTION.md](/.github/CONTRIBUTION.md) for proper procedures

## Versioning & Localization

In our documentation we implement [docusaurus'](https://docusaurus.io/docs/versioning) versioning system. Additionally we also implement the [i18n Localization](https://docusaurus.io/docs/i18n/tutorial) feature of docusaurus as well. 

The best way to think about our documentation is as follows

- **Docs/**: The "source" documentation, this is where we will create new pages, and update for latest changes on our products. When the site is built this directory will be served as the "pre-release" version
- **i18n/**: The localized documentation, this is where the localized files will be stored. Note: These files are part of the .gitignore so they will only be downloaded on build time. More on how this process works in the [localization](###Localization) section below.  

### Localization

Localization is managed with the [i18n docusaurus plugin](https://docusaurus.io/docs/versioning) in conjunction with the [Crowdin translation portal](https://support.crowdin.com/translation-process-overview/).

**Our localization works in two parts**

1. **i18n Plugin**: This plugin loads translated data for each language and allows the user to select which language they prefer. This plugin also handles all of the routing, and [code adjustment for static react pages](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code) on our documentation, as well as [generate .json string](https://docusaurus.io/docs/i18n/tutorial#translate-plugin-data) files for other non-markdown pages. Additionally it will help us in managing [translated .md files](https://docusaurus.io/docs/i18n/tutorial#translate-markdown-files)

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

While the section below may still be useful, it's worth noting that we have automated this process with github actions, now a build will automatically be deployed anytime a push is made to main, as well as once every 24hrs

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
