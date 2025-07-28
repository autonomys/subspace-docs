---
title: Getting started
sidebar_position: 1
description: How to contribute to the Autonomys Docs
slug: /community/contributing/intro
keywords:
    - Docs
    - Contribute
    - How-To
    - Community
    - Awesome
---

# How to Contribute!

### You Rock!

First off, thank you for considering contributing to the Autonomys Network. It's through the amazing collaboration of people like yourself that truly make the open source community amazing.

### Help Us Help You Help Us!

Following these guidelines shows that you respect the time of the developers who maintain this open source project. In return, they should reciprocate that respect by addressing your issue, assessing changes, and helping you finalize your pull requests.


### What Can I Contribute?

We are a fully open source project, meaning we welcome all kinds of contributions from the community. Here are a few examples of contributions that we are open to:

- **Add Content:** Writing a nice guide? Submit it on the [forum guides](https://forum.autonomys.xyz/c/guides-and-faqs/13). 
- **Bug Reports & Fixes:** Find a bug or error? Let us know where it's hiding. Report it at the [support forum](https://forum.autonomys.xyz/c/support/5).
- **Feature Requests & Implementations:** Looking for a new feature? Share your ideas so we can improve.

*If you have something that is not listed, try to be as descriptive as possible and feel free to submit the [pull request](https://github.com/autonomys/subspace-docs/pulls).*

# Ground Rules

Please refer to our [Code of Conduct](/participate/contribute/code-of-conduct).

# Your First Contribution

## Simple Fix

Please follow this pathway for *minor* contributions such as spelling errors, typos, rewording, etc. 

:::info For Major Contributions
If you are adding entirely new pages, features, etc, then please refer to the [Advanced](#advanced-fix) portion of this section.
:::

1. Go to the [Autonomys Documentation](https://docs.autonomys.xyz), and find the page that you would like to change.
2. Scroll to the bottom and click `Edit this page`.
3. This will open the page in GitHub’s web editor.
4. Once you are satisfied with your changes, click the ‘Commit changes…’ button in the top right, fill Commit message and Extended description.
5. Click `Create Pull Request`

:::tip GitHub Web Editor
When you submit changes through the web editor, GitHub automatically creates a fork of the repository under your account `<your_github_name>/subspace-docs` and opens a pull request. While this method is convenient for quick edits, it has limitations for more complex contributions.
:::


Congratulations! You have just submitted your first pull request! 
*Please provide some time for a maintainer to view your pull request and approve it, or request adjustments.*

## Never contributed before?

No worries! We all start somewhere. There are several videos and resources online to show various ways to use GitHub.
Check out some of these amazing guides to help get you familiar with GitHub and contributing.
- [First Contributions - Terminal](https://github.com/firstcontributions/first-contributions)
- [First Contributions - GitHub Desktop](https://github.com/firstcontributions/first-contributions/blob/main/docs/gui-tool-tutorials/github-desktop-tutorial.md)
- [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Advanced Fix

This section presumes a better understanding of GitHub, and programming basics.

For larger, more advanced fixes please ensure you follow the basic principles below.
* Do **not** comment simple, trivial code such as importing existing components, and basic HTML/CSS.
* Do comment on complex non-trivial code, complex logic should be easy to understand.
* All public functions need to be commented.
* If code is trivial but could be forgotten over time, please comment.
* Try to think about your code from a 3rd person view, it should make sense to anyone with a similar background in the technology that you are using.
* Sometimes difficult to understand code needs refactoring instead of more comments.
* Make sure the program still builds before submitting a pull request.

For advanced fixes you should follow the general pathway for GitHub.

1. Create your own fork of the code.
![Fork](/img/doc-imgs/Fork_Instructions.png)
2. Do the changes locally on your system in your preferred development environment. 
3. Following the README.md instructions, test your changes locally with `yarn build` and `yarn run serve` or `npm build` and `npm run serve` to ensure there are no clear issues.
4. Push the changes to your fork and submit a pull request by comparing across forks.
![Submit Pull Request](/img/doc-imgs/Submit_Pull.png)

# How to report a bug or error

We do not have any strict template that you must follow, but please provide all required information so we can quickly resolve any issues.

* If you find an actual programming bug, please submit a GitHub issue and use the label `bug`.
* If you find a grammar/spelling/content error, please submit a GitHub issue and use the label `documentation`.

# How to suggest a feature or enhancement

This documentation is for the community, so any feature requests are welcome.
* If you are requesting a feature, please submit a GitHub issue and use the label `enhancement`.
* Explain why this issue is needed, and what problems it will solve.
* Indicate if you are able/willing to help implement this feature.

# Code review process

* The core team will take a look at any pull requests as soon as possible, generally you can expect a response within a day or two.
* If it is a simple and non-controversial fix we will review the code and approve. 
* If there are questions, feedback, or more discussion needs to be had we will reach out to the contributor on the Pull Request to try and resolve said issues.
* If there is no response or activity within 2 weeks of team response we may close the pull request.

# Community

You can chat with the core team on Discord https://autonomys.xyz/discord.
