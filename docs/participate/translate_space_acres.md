---
title: Space Acres UI Translation Guide
sidebar_position: 4
description: Translation Guide for the Space Acres UI
keywords:
    - Space Acres UI translation
    - Community
    - Autonomys
    - Translate
    - Localization
---


## Translation Guide

Thank you for considering contributing to the Space Acres UI locallization! This guide is here to help you contribute to our goal of making farming on the Autonomys Network more accessible and inclusive by localizing or translating the user interface. The Autonomys Network is driven by a vision of a decentralized and equitable future, and we believe that overcoming language barriers is crucial to achieving this vision.

## Before you start

Space Acres has a lot of techncical and Autonomys-related slang that **will not be translated correctly** via the AI-chats similar to **Chat GPT** or **Google Translate**. We kindly ask you to work to do all translations manually, since we can't really verify their correctness. We thank you for your understanding! 

## Step by Step Tutorial

1. Sign in into your [GitHub](https://github.com/) account, or create a new account if you don't have one yet. 
2. Proceed to [Space Acres translations folder](https://github.com/autonomys/space-acres/tree/main/res/translations) in the Space Acres reposotory.

    ![sa-translate-1](/img/doc-imgs/space-acres-translate/sa-translate-1.png)

3. Check that the language you're planning to translate the UI to **has not been translated yet**! 
4. Click on **Add File** and select **Create New File**.
    
    ![sa-translate-2](/img/doc-imgs/space-acres-translate/sa-translate-2.png)

    
5. Provide the name of the file: it should start with the two letters from [an IBAN Alpha-2 code](https://www.iban.com/country-codes) list followed by the `/messages.ftl`. 

    ![sa-translate-3](/img/doc-imgs/space-acres-translate/sa-translate-3.png)

    For example, if you're willing to translate the Space Acres UI into **Russian language**, you would put `ru/messages/ftl`. You will notice that as soon as you put the forward slash `/` after the double-digit language code, it would turn **blue**, meaning that your translation file will be created in a folder, which is correct and expected!

    ![sa-translate-4](/img/doc-imgs/space-acres-translate/sa-translate-4.png)

6. Copy the content of the [English Subspace UI](https://github.com/autonomys/space-acres/blob/main/res/translations/en/messages.ftl) into the **Edit window**.

    ![sa-translate-5](/img/doc-imgs/space-acres-translate/sa-translate-5.png)

7. Start translating messages from the UI into the language of your choice! Please make sure to only translate the text that comes after the `=` sign. Also, please **don't translate** any variables, e.g. `{$chain_name}`.

    ![sa-translate-6](/img/doc-imgs/space-acres-translate/sa-translate-6.png)

8. When you finish translating the **whole file**, click on **Commit Changes...**.
    
    ![sa-translate-7](/img/doc-imgs/space-acres-translate/sa-translate-7.png)

9. You will see the new window apprear!
    
    ![sa-translate-8](/img/doc-imgs/space-acres-translate/sa-translate-8.png)

10. Adjust the commit message and the change description.

    ![sa-translate-9](/img/doc-imgs/space-acres-translate/sa-translate-9.png)

11. Additionally, you could adjust the branch-name from the generic one to the one, that makes the most sense. E.g. `add-your-language-support` and click on `Propose Changes`.

    ![sa-translate-10](/img/doc-imgs/space-acres-translate/sa-translate-10.png)

12. Look at your changes by scrolling down the page one last time and ensure that everything is translated correctly before submitting the changes.

    ![sa-translate-11](/img/doc-imgs/space-acres-translate/sa-translate-11.png)

    ![sa-translate-12](/img/doc-imgs/space-acres-translate/sa-translate-12.png)

13. Submit your changed by clicking 

    ![sa-translate-13](/img/doc-imgs/space-acres-translate/sa-translate-13.png)