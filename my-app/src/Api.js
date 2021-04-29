import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

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

const trimArticle = (body, percent) => {
    return body.substring(0, (percent * body.length) / 100 )
}

const continueReading = (articleID) => {
    return `<p class="continue-reading"><a href="${articleID}">Continue reading...</a></p>`
}

const showThumbnail = (thumbnailUrl) => {
    return `<div class="filtered" style="background-image:url('${thumbnailUrl}')" alt="Thumbnail"></div>`
}

function Api(props) {
    
    const [title, setTitle] = useState(0)
    const [body, setBody] = useState(0)
    const [thumbnail, setThumbnail] = useState(0)

    const link = "https://www.theguardian.com/" + props.article


    // TODO: replace modern expressions with 19th century equivalents. 
    useEffect(() => {
    getNews(props.article).then(n => {

        // extract content from the API response
        const title = n.response.content.webTitle
        const bodyResponse = n.response.content.fields.body
        const thumbnailResponse = n.response.content.fields.thumbnail
        const body = props.percentage ? trimArticle(bodyResponse, props.percentage) + continueReading(link) : bodyResponse
        const thumbnail = props.thumbnail === "yes" ? showThumbnail(thumbnailResponse) : ""

        setTitle(title)
        setBody(body)
        setThumbnail(thumbnail)
            
    })}, [])
    

    return (
        <div>
            <h2><a href={link}>{title}</a></h2>
            {ReactHtmlParser(thumbnail)}
            <p class="story-copy">{ReactHtmlParser(body)}</p>
        </div>
   
    )
} 

export default Api
export { getNews }
export { apiKey, guardianApi }
