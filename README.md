# 1821 mode

## To do

- [ ] What is this all about?
- [ ] How to run the app locally
- [x] How it's deployed
- [x] Write what components do

## What is this all about?
May 2021 marks the Guardian's 200 year birthday and to mark the occasion, the 4 fellows at the Product & Engineering department decided to create a 1821 version of the Guardian front page during the Hack day in April 2021. The idea won the Best Conceptual Hack category!

## Components

`Api.js` renders the title and body of an article.
The component takes an `article` attribute which is the identifier of a Guardian article, and a `percentage` attribute specifying the percentage of the text to display.

Example:
```jsx
<Api article="artanddesign/2021/apr/23/damn-this-is-a-caravaggio-the-inside-story-of-an-old-master-found-in-spain" percentage="60" />
```

## Deployment 
* The app is currently hosted on surge(http://surge.sh) with the domain `1821.surge.sh`
* In order to deploy any changes made to the app, run `npm build` -> `cd build` -> `echo 1821.surge.sh >CNAME` -> `surge .`
