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
    [/‘No one judges you out here’: fishing prescribed for NHS patients/, "Hear ye! Fishing be well for a hearty constitution"],
    [/Covid crisis makes Mark Drakeford most recognisable Welsh leader since devolution/, "Drakeford of Wales: a leader indeed renowned"],
    [/US seen as bigger threat to democracy than Russia or China, global poll finds/, "Here be demons! A world most fearful of Americans"],
    [/Scrap Thames tunnel or lose our support, activists tell Sadiq Khan/, "New Luddites - and this time it be tunnels the target of their wrath"],
    [/France still split over Napoleon as it marks bicentenary of death/, "On Napoleon Bonaparte - short and French, he died this day"],
    [/‘Stuff of legends’: editors around world salute the Guardian on 200 years/, "Some agreeable sentiments from our friends and fellows"]
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
  const bodyTrimmed = props.percentage && props.percentage !== "100"
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
