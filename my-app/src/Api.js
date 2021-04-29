import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, withRouter } from "react-router-dom";


const apiKey = 'fa7a2b96-0cb9-4da8-b684-c33cad253d0d'
const guardianApi = 'https://content.guardianapis.com/'


// Fields to show in the API response. Documentation can be found here:
// https://open-platform.theguardian.com/documentation/item
const articleFields = ['body', 'thumbnail']
const showFields = (fields) => fields.join(",")
const fieldsToShow = showFields(articleFields)

async function getNews(id) {
    return await fetch(guardianApi + id + "?show-fields="+ fieldsToShow +"&api-key="+ apiKey)
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
    let art = "/article?id="
    return (
  
        <div>
            
            <h2><Link to={art+props.article}>{title}</Link></h2>
            {ReactHtmlParser(thumbnail)}
            <p class="story-copy">{ReactHtmlParser(body)}</p>
        </div>
   
    )
} 


export default Api
export { getNews }
export { apiKey, guardianApi }
