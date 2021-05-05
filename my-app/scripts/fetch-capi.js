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
    'society/2021/may/04/no-one-judges-you-out-here-fishing-prescribed-for-nhs-patients',
    'uk-news/2021/may/04/covid-crisis-makes-mark-drakeford-most-recognisable-leader-in-22-years-of-welsh-devolution',
    'world/2021/may/05/us-threat-democracy-russia-china-global-poll',
    'uk-news/2021/may/05/scrap-thames-tunnel-or-lose-our-support-activists-tell-sadiq-khan',
    'science/2021/may/05/mary-rose-ship-multi-ethnic-crew-tudor-england',
    'media/2021/may/05/guardian-200-editors-around-the-world-happy-birthday'
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