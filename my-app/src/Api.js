// import Guardian from 'guardian-js';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

const apiKey = 'fa7a2b96-0cb9-4da8-b684-c33cad253d0d'

//const api = new Guardian(apiKey, false);
const apiUrl = "https://content.guardianapis.com/uk-news/2021/apr/22/minister-apologises-for-black-and-asian-war-dead-commemoration-failures?show-fields=body"

async function getNews() {
    return await fetch(apiUrl + "&api-key="+ apiKey)
    .then(res =>  res.json())
}

function Api() {
    
    const [result, setResult] = useState([])

    useEffect(() => {
    getNews().then(n => {
       // var title = "<h2>" + n.response.content.webTitle + "</h2>"
        //var body = n.response.content.fields.body
        setResult(n)
    })}, [])
    return (
        <div>
            <h2>{ReactHtmlParser(result.response.content.webTitle)}</h2>
            <p>{ReactHtmlParser(result.response.content.fields.body)}</p>
        </div>
    )
} 


export default Api
