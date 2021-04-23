// import Guardian from 'guardian-js';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const apiKey = 'fa7a2b96-0cb9-4da8-b684-c33cad253d0d'
const guardianApi = 'https://content.guardianapis.com/'
//const api = new Guardian(apiKey, false);

async function getNews(id) {
    return await fetch(guardianApi + id + "?show-fields=body,thumbnail&api-key="+ apiKey)
    .then(res =>  res.json())
}

function Api(props) {
    
    const [title, setTitle] = useState(0)
    const [body, setBody] = useState(0)
    const [thumbnail, setThumbnail] = useState(0)

    useEffect(() => {
    getNews(props.article).then(n => {
        setTitle(n.response.content.webTitle.replace("Damn", "By golly"))
        setBody(props.percentage
            ? n.response.content.fields.body.substring(0, (props.percentage * n.response.content.fields.body.length) / 100 ) + "..."
            : n.response.content.fields.body)
        setThumbnail(props.thumbnail === "yes"
            ? "<div class=\"filtered\" style=\"background-image:url("+n.response.content.fields.thumbnail+")\" alt=\"\"></div>"
            : "")
            
    })}, [])

    return (
  
        <div>
            
            <h2><Link to="/Article">{ReactHtmlParser(title)}</Link></h2>
            {ReactHtmlParser(thumbnail)}
            <p class="story-copy">{ReactHtmlParser(body)}</p>
        </div>
   
    )
} 


export default Api
