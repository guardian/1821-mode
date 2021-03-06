# 1821 mode

## To do

- [ ] What is this all about?
- [ ] How to run the app locally
- [x] How it's deployed
- [x] Write what components do

## What is this all about?
* 2021 May marks the Guardian's 200 year birthday! For the occasion, the four fellows at the Product & Engineering department decided to create a 1821 version of the Guardian front page during the Hack day in April 2021 ([Presentation](https://docs.google.com/presentation/d/1jJJoXGOCS6QAHFIg8j8mzQeuLKMSzdEK9wU6XEl9dBE/edit#slide=id.p)). The idea won the Best Conceptual Hack category!
* The articles are sourced from the Guardian's Content API. We used React to style the page. We then added old ads to give the 19th century look & feel to it.

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
