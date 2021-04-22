import React from 'react'

import Api from './Api.js';

function Columns() {
    return (
        <div style={columnContainer}>
            <Api article="uk-news/2021/apr/22/minister-apologises-for-black-and-asian-war-dead-commemoration-failures"/>
            <img src="https://audioxide-wiki.neocities.org/Images/ad1.png" alt="Old fashioned advert" />
            <Api article="technology/2021/apr/22/signal-founder-i-hacked-police-phone-cracking-tool-cellebrite" />
        </div>
    )
}

const columnContainer = {
    columnCount: '6',
    height: '800px',
}

export default Columns