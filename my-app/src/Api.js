// import Guardian from 'guardian-js';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

const apiKey = 'fa7a2b96-0cb9-4da8-b684-c33cad253d0d'
const guardianApi = 'https://content.guardianapis.com/'
//const api = new Guardian(apiKey, false);

async function getNews(id) {
    return await fetch(guardianApi + id + "?show-fields=body&api-key="+ apiKey)
    .then(res =>  res.json())
}

function Api(props) {
    
    const [title, setTitle] = useState(0)
    const [body, setBody] = useState(0)

    useEffect(() => {
    getNews(props.article).then(n => {
        setTitle(n.response.content.webTitle)
        setBody(props.percentage
            ? n.response.content.fields.body.substring(0, (props.percentage * n.response.content.fields.body.length) / 100 ) + "..."
            : n.response.content.fields.body)
    })}, [])

    return (
        <div>
            <h2>{ReactHtmlParser(title)}</h2>
            <p>{ReactHtmlParser(body)}</p>
            <hr></hr>
        </div>
    )
} 


export default Api
