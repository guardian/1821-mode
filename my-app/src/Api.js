import React from "react";
import ReactHtmlParser from "react-html-parser";

const trimArticle = (body, percent) => {
  return body.substring(0, (percent * body.length) / 100);
};

const continueReading = (articleID) => {
  return `<p class="continue-reading"><a href="${articleID}">Continue reading...</a></p>`;
};

// replace modern words/expressions with 19th century equivalents.
const replaceWords = (text) => {
  const rules = [
     [/\byou\b/g, "thou"],
     [/(from which|from where)/g, "whence"]
  ]
  rules.forEach(rule => {
    const [regex, replacement] = rule
    text = text.replace(regex, replacement)
  })
  return text
}

function Api(props) {
  // extract content from the API response stored in all.json
  const articleLink = props.article.response.content.id;
  const link = "https://www.theguardian.com/" + articleLink;
  const titleResponse = props.article.response.content.webTitle;
  const bodyResponse = props.article.response.content.fields.body;
  const bodyTrimmed = props.percentage
    ? trimArticle(bodyResponse, props.percentage) + continueReading(link)
    : bodyResponse;
  const title = replaceWords(titleResponse)
  const body = replaceWords(bodyTrimmed);
  
  return (
    <div class="story">
      <h2>
        <a href={link}>{title}</a>
      </h2>
      <p class="story-copy">{ReactHtmlParser(body)}</p>
    </div>
  );
}

export default Api;
