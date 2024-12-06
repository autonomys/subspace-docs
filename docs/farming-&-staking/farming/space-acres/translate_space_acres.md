---
title: Translation Guide
sidebar_position: 2
description: Translation Guide for Space Acres
slug: /farming/space-acres/translate
keywords:
    - Space Acres UI translation
    - Community
    - Autonomys
    - Translate
    - Localization
---

## Supported Languages
Space Acres UI is already localized in several languages, making it easier for users across the globe to participate in farming on the Autonomys Network. Our goal is to ensure that as many people as possible can access and use the platform in their native language.

Currently, the Space Acres UI supports the following languages:

- English
- German
- Spanish
- French
- Serbian
- Russian
- Chinese (Simplified)

We are continuously working to expand this list. For the most up-to-date list of supported languages, please refer to the translations section of the [Space Acres repository](https://github.com/autonomys/space-acres/tree/main/res/translations). If you would like to contribute a translation to a language that is not yet supported, please follow the guidelines below. 


## Translation Guide

Thank you for considering contributing to the Space Acres UI localization! This guide is here to help you contribute to our goal of making farming on the Autonomys Network more accessible and inclusive by localizing or translating the user interface. The Autonomys Network is driven by a vision of a decentralized and equitable future, and we believe that overcoming language barriers is crucial to achieving this vision.

## Before you start

Space Acres has a lot of technical and Autonomys-related slang that **will not be translated correctly** via LLMs such as **Chat GPT** or translation services such as **Google Translate**. We kindly ask you to work to do all translations manually, since we can't really verify their correctness. We thank you for your understanding! 

## Step by Step Tutorial

1. Sign in to your [GitHub](https://github.com/) account, or create a new account if you don't have one yet. 
2. Proceed to the [Space Acres translations folder](https://github.com/autonomys/space-acres/tree/main/res/translations) in the Space Acres repository.

    ![sa-translate-1](/img/doc-imgs/space-acres-translate/sa-translate-1.png)

3. Check that the language you're planning to translate the UI to **has not been translated yet**! 
4. Click on **Add file** and select **Create new file**.
    
    ![sa-translate-2](/img/doc-imgs/space-acres-translate/sa-translate-2.png)

    
5. Provide the name of the file: it should start with the 2-character language code, plus the 2-character code of the region (optional) followed by `/messages.ftl`. You can refer to the [IETF languages tag page](https://en.wikipedia.org/wiki/IETF_language_tag) to find out the language code. 

    ![sa-translate-3](/img/doc-imgs/space-acres-translate/sa-translate-3.png)

    For example, if you're planning to translate the Space Acres UI into the **Russian language**, you would put `ru/messages.ftl` (or alternatively if you want to specify the region: `ru-RU/messages.ftl`). You will notice that as soon as you put the forward slash `/` after the 2-character language code, it will turn **blue** in the interface, indicating that your translation file will be correctly created in the appropriate folder.

    ![sa-translate-4](/img/doc-imgs/space-acres-translate/sa-translate-4.png)

    Some other language-region pair examples:
    - uk-UA
    - en-GB

6. Copy the content of the [English Space Acres UI](https://github.com/autonomys/space-acres/blob/main/res/translations/en/messages.ftl) into the **Edit window**.

    ![sa-translate-5](/img/doc-imgs/space-acres-translate/sa-translate-5.png)

7. Start translating messages from the UI into the language of your choice! Please make sure to only translate the text that comes after the `=` sign. Also, please **don't translate** any variables, e.g. `{$chain_name}`.

    ![sa-translate-6](/img/doc-imgs/space-acres-translate/sa-translate-6.png)

8. When you finish translating the **whole file**, click on **Commit changes...**.
    
    ![sa-translate-7](/img/doc-imgs/space-acres-translate/sa-translate-7.png)

9. You will see a new window appear!
    
    ![sa-translate-8](/img/doc-imgs/space-acres-translate/sa-translate-8.png)

10. Adjust the commit message and the change description.

    ![sa-translate-9](/img/doc-imgs/space-acres-translate/sa-translate-9.png)

11. Additionally, you could adjust the branch-name from the generic one to one that makes the most sense e.g. `add-your-language-support` and click on `Propose changes`.

    ![sa-translate-10](/img/doc-imgs/space-acres-translate/sa-translate-10.png)

12. Review your changes by scrolling down the page one last time and ensure that everything is translated correctly before submitting the changes.

    ![sa-translate-11](/img/doc-imgs/space-acres-translate/sa-translate-11.png)

    ![sa-translate-12](/img/doc-imgs/space-acres-translate/sa-translate-12.png)

13. Submit your changes by clicking on **Create pull request**.

    ![sa-translate-13](/img/doc-imgs/space-acres-translate/sa-translate-13.png)

    Your translation submission is now complete and next steps are for the team to review before providing feedback and/or merging the pull request. Thanks for your help in bringing Space Acres to an even wider audience!
