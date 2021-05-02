import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const trimArticle = (body, percent) => {
  return body.substring(0, (percent * body.length) / 100);
};

const continueReading = (articleID) => {
  return `<p class="continue-reading"><a href="${articleID}">Continue reading...</a></p>`;
};

// TODO: replace modern expressions with 19th century equivalents.

function Api(props) {
  // extract content from the API response stored in all.json
  const articleLink = props.article.response.content.id;
  const link = "https://www.theguardian.com/" + articleLink;
  const title = props.article.response.content.webTitle;
  const bodyResponse = props.article.response.content.fields.body;
  const body = props.percentage
    ? trimArticle(bodyResponse, props.percentage) + continueReading(link)
    : bodyResponse;
  
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
