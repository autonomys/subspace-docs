## Development

Once you are prepared to merge your changes to the repo, please ensure you check out the [CONTRIBUTING.md](/CONTRIBUTING.md) for proper procedures

## Localization

In our documentation, we implement Docusaurus's [i18n Localization](https://docusaurus.io/docs/i18n/tutorial) feature.

The best way to think about our documentation is as follows:

- **Docs/**: The "source" documentation where we create new pages and update for the latest changes to our products.
- **i18n/**: The localized documentation, where the localized files will be stored. Note: These files are part of the .gitignore, so they will only be downloaded at build time. More on how this process works in the [localization](#Localization) section below.

### Localization Process

Localization is managed with the [i18n Docusaurus plugin](https://docusaurus.io/docs/i18n/tutorial) in conjunction with the [Crowdin translation portal](https://support.crowdin.com/translation-process-overview/).

**Our localization works in two parts:**

1. **i18n Plugin**: This plugin loads translated data for each language and allows the user to select their preferred language. It also handles all routing and [code adjustments for static React pages](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code) in our documentation, as well as generating [JSON string](https://docusaurus.io/docs/i18n/tutorial#translate-plugin-data) files for non-Markdown pages. Additionally, it helps manage [translated .md files](https://docusaurus.io/docs/i18n/tutorial#translate-markdown-files).

2. **Crowdin Translation Portal**: This third-party tool assists us in uploading our files to a dedicated platform for hosting translations from the broader community. It also provides a CLI and a crowdin.yml file that is used for configuring file sources and destinations.

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

If you are working with different languages, you will need to either:

- Build the server and serve it with `yarn build` && `yarn serve`
- Run the dev server for each language with `yarn start -- --locale en` (Replace 'en' with the two letter code of whichever language you are working with)
-----
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
