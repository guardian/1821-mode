const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const apiKey = "1821G200";
const guardianApi = "https://content.guardianapis.com/";

// Fields to show in the API response. Documentation can be found here:
// https://open-platform.theguardian.com/documentation/item
// Append other fields to articleFields if needed
const articleFields = ["body"]; 
const showFields = (fields) => fields.join(",");
const fieldsToShow = showFields(articleFields);

const capiIds = [
    'world/2021/may/02/rome-colosseum-to-gain-hi-tech-arena-floor',
    'commentisfree/2021/apr/29/sometimes-waiting-is-better-than-bingeing-ask-the-millions-who-watched-line-of-duty',
    'fashion/2021/may/02/could-you-wear-a-dress-for-100-days',
    'world/2021/may/02/political-chaos-and-poverty-leave-south-america-at-viruss-mercy',
    'music/2021/apr/29/billie-eilish-your-power-review-chilling-ballad-seeps-under-your-skin'
];

async function getNews(id) {
    return await fetch(
      guardianApi + id + "?show-fields=" + fieldsToShow + "&api-key=" + apiKey
    ).then((res) => {
      return res.json()
    });
  }

const main = ()  => {
    const capiJson = Promise.all(capiIds.map(getNews)).then((res) => {
      const filePath = path.join(__dirname, '../src/capi-data/all.json');
      fs.writeFileSync(filePath, JSON.stringify(res));
    });
};

main();