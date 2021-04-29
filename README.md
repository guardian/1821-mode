# 1821 mode

## To do

- [ ] What is this all about?
- [ ] How to run the app locally
- [ ] How it's deployed
- [x] Write what components do

## Components

`Api.js` renders the title and body of an article.
The component takes an `article` attribute which is the identifier of a Guardian article, and a `percentage` attribute specifying the percentage of the text to display.

Example:
```jsx
<Api article="artanddesign/2021/apr/23/damn-this-is-a-caravaggio-the-inside-story-of-an-old-master-found-in-spain" percentage="60" />
```