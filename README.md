<img src="./static/img/subspace-network.svg" align="center" />
<div style="text-align: center;">
    <a title="Crowdin" target="_blank" href="https://crowdin.com/project/subspace-docs"><img src="https://badges.crowdin.net/subspace-docs/localized.svg"></a>
</div>


This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Structure

This repo has two main folders: 'versioned_docs/version-latest' and 'docs'. 'versioned_docs/version-latest' holds the latest official release of our documentation, while 'docs' has pre-release versions for testing. Switch between them using the toggle in the top right corner.

![folders toggle](static/img/doc-imgs/read-me/versioned-docs-toggle.png)


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Contributing

If you would like to contribute check out the following materials, and feel free to ask questions in our [Discord](https://discord.gg/subspace-network)

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Development Guide](DEVELOPMENT.md)

Thank you to all our [Contributors](https://github.com/subspace/subspace-docs/graphs/contributors)!
