// import Guardian from 'guardian-js';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

const apiKey = '2788365f-9557-4a3d-8c5a-8e4a89f85a31'

//const api = new Guardian(apiKey, false);
const apiUrl = "https://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target?show-fields=body"

async function getNews() {
    return await fetch(apiUrl + "&api-key="+ apiKey)
    .then(res =>  res.json())
}

function Api() {
    
    const [result, setResult] = useState(0)

    useEffect(() => {
    getNews().then(n => {
        var title = "<h2>" + n.response.content.webTitle + "</h2>"
        setResult(title +n.response.content.fields.body +n.response.content.fields.body +n.response.content.fields.body +n.response.content.fields.body)
    })})
    return (
        <div>
            <p>{ReactHtmlParser(result)}</p>
        </div>
    )
} 


export default Api
