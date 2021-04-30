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
    'culture/2021/apr/30/noel-clarke-dropped-by-broadcasters-over-sexual-harassment-claims', 'world/2021/apr/30/covid-victims-overwhelm-delhi-crematoriums'
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
      console.log(res)
      const filePath = path.join(__dirname, '../capi-data/all.json');
      fs.writeFileSync(filePath, JSON.stringify(res));
    });
};

main();