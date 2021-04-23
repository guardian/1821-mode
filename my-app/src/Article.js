import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Api, getNews, guardianApi, apiKey } from './Api.js';
import Header from './Header.js'
import Footer from './Footer.js'

async function getNews2(id) {
    return await fetch("https://content.guardianapis.com/" + id + "?show-fields=body,thumbnail&api-key=fa7a2b96-0cb9-4da8-b684-c33cad253d0d")
    .then(res =>  res.json())
}
function Article(props) {

    const [title, setTitle] = useState(0)
    const [body, setBody] = useState(0)
    const [image, setImage] = useState(0)
     useEffect(() => {
        let example = "artanddesign/2021/apr/23/damn-this-is-a-caravaggio-the-inside-story-of-an-old-master-found-in-spain"

    getNews2(example).then(n => {

        setTitle(n.response.content.webTitle.replace("Damn", "By golly"))
        setBody(n.response.content.fields.body)
        setImage(n.response.content.fields.thumbnail)
            
    })}, [])

    return (
        
        <main style={homeMain}>
        <Header />
        <div style={columnContainer}>
            {body}
          </div>
          <Footer />
      </main>

    )
}
const homeMain = {
    margin: 'auto',
    width: '90%',
}
const columnContainer = {
    columnCount: '2',
}

export default Article