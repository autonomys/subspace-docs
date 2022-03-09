## Development

Once you are prepared to merge your changes to the repo, please ensure you check out the [CONTRIBUTION.md](/.github/CONTRIBUTION.md) for proper procedures

### Local Development

Install the required packages
```
$ npm i
```

Start a local development server
```
$ npm run start
```

> This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

If you are working with different languages you will need to either 

a) Build the server and serve it with `npm run build` && `npm run serve`
b) Run the dev server for each language with `npm run start -- --locale en` (Replace 'en' with the two letter code of whichever language you are working with)

### Deploy (Staff Use Only)

This is only for preparing the documentation for deployment to GitHub Pages.


1. Checkout to `main` branch.
```
git checkout main
```

2. Ensure the build is working on a production build.
```
$ npm run build
```
> This command generates static content into the `build` directory and will optimize any links, content, & documents.

3. Deploy `main` to `gh-pages` branch with the below command.
```
$ GIT_USER=<Your GitHub username> npm run deploy
```
