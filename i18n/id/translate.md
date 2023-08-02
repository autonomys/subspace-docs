---
title: Translation Guide
sidebar_position: 3
description: Translation Guide for the Subspace Docs
keywords:
  - Awesome
  - Community
  - Subspace
  - Translate
---

# Translation Guide

This guide will show you how to provide translations for this documentation.

## Prerequisites

- GitHub Account: They are free, and will be a necessity if you would like to contribute to most open source projects. Create an account [here](https://github.com/join)
- Basic understanding of GitHub and how to make a contribution. Check out our [Contributing](contribute) guide for more help with this.



## Guidelines

- Our goal with providing translations on our docs is to crowd source a great multi-language environment. Due to this, if you see what you would like to translate has already been added, please do not add a second translation. Rather it would be more beneficial to peer review the existing translation, and provide any feedback, edits, or improvements.

- We also ask that if you are adding a new document, guide, or section to a translated portion that you also add it to the english section as this is the official language of the documentation.

- Ensure you follow our [Contributing](contribute) Standards, and our [Code of Conduct](CODE_OF_CONDUCT).

## How-To

To understand how to translate for the Subspace Docs, it is important to understand how the file structure is formatted.

In regards to the actual documentation all you will need to focus on is the `docs` folder & the `i18n` folder.

Below you will see a visual example of the docs. We write our original documentation in english, which is stored in the `docs` folder.

The translated version of those same documents is stored under the `i18n\[shortcode]\docusaurus-plugin-content-docs\current\...` folder under each language by their shortcode eg. `es` for Spanish.

See example below.

```
├── docs/                       
│   ├── Getting Started/         --|
│   │   ├── _category.json         |
│   │   ├── commands.md            |
│   │   ├── farming.md             |
│   │   ├── issues.md              |
│   │   ├── developing.md          |--- Original English Docs
│   │   └── farming-terminal.md    |
│   ├── intro.md                   |
│   ├── community-awesome.md       |
│   └── official.md              --|
├── i18n/
│   ├── es/
│   │   ├── docusaurus-plugin-content-blog
│   │   ├── docusaurus-plugin-content-docs/
│   │   │   ├── current/
│   │   │   │   ├── Getting Started/         --|
│   │   │   │   │   ├── _category.json         |
│   │   │   │   │   ├── commands.md            |
│   │   │   │   │   ├── farming.md             |
│   │   │   │   │   ├── issues.md              |
│   │   │   │   │   ├── developing.md          |--- Original English Docs
│   │   │   │   │   └── farming-terminal.md    |
│   │   │   │   ├── intro.md                   |
│   │   │   │   ├── community-awesome.md       |
│   │   │   │   └── official.md              --|
│   │   │   └── current.json
│   │   ├── docusaurus-theme-classic
│   │   └── code.json
│   ├── ko
│   ├── ru
│   ├── uk
│   └── vi
├── src
├── static
├── .gitignore
└── ...etc
```

Now that you understand the file structure we can move on to editing it!

1. Check if the file already exists. (If not simply copy it from the `docs` folder to its respective location)

2. Make your changes/translation. Our documentation website uses `Markdown`. This is similar to normal Text but has some enhanced features. If you are unfamiliar with markdown, you may find [this](https://dillinger.io/) tool helpful, just copy over the text, edit it to your liking then copy back over.

3. Submit for review.



## Submission Process

1. Ensure you have followed the standards from the [CONTRIBUTING](contribute) guide.
2. Submit PR Explaining translation, with `documentation` & `translation` labels.
3. Wait for review.
    1. Review will start with basic code review. (make sure it's working)
    2. Next step will be a translation review. We will have a third party member who also speaks the language translate your section back into english. If the re-translated english version is different then the translation will be sent back to you for edits, changes, etc.
    3. If they match, it shows us there is nothing being lost in translation and we will merge PR into the public docs.
4. Once review is passed, you will see your changes reflected on the docs within a week.

