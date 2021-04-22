import React from 'react'

import Api from './Api.js';

function Columns() {
    return (
        <div style={columnContainer}>
            <Api article="uk-news/2021/apr/22/minister-apologises-for-black-and-asian-war-dead-commemoration-failures"/>
            <img src="https://audioxide-wiki.neocities.org/Images/ad1.png" alt="Old fashioned advert" />
            <Api article="technology/2021/apr/22/signal-founder-i-hacked-police-phone-cracking-tool-cellebrite" />
            <img src="https://audioxide-wiki.neocities.org/Images/ad2.png" alt="Old fashioned advert" />
            <Api article="environment/2021/apr/22/boris-johnson-urges-leaders-to-get-serious-at-climate-summit" />
            <img src="https://audioxide-wiki.neocities.org/Images/ad3.png" alt="Old fashioned advert" />
            <Api article="technology/2021/apr/22/ransomware-hackers-steal-plans-upcoming-apple-products" />
            <img src="https://audioxide-wiki.neocities.org/Images/ad4.png" alt="Old fashioned advert" />

        </div>
    )
}

const columnContainer = {
    columnCount: '6',
}

export default Columns