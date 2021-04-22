// import Guardian from 'guardian-js';
import { useState } from 'react';
const apiKey = 'gnm-hackday-21'

//const api = new Guardian(apiKey, false);
const apiUrl = "https://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target?show-fields=body"

async function getNews() {
    return await fetch(apiUrl + "&api-key="+ apiKey)
    .then(res =>  res.json())
}

function Api() {
    
    const [result, setResult] = useState(0)
    getNews().then(n => {
        let stringified = JSON.stringify(n)
        let obj = JSON.parse(stringified)
        console.log(obj)
        setResult(obj.response.content.webTitle + obj.response.content.fields.body)
    })
    return (
        <div>
            <h1>{result}</h1>
        </div>
    )
} 


export default Api
