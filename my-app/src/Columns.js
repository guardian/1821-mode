import React from 'react'

import Api from './Api.js';

function Columns() {
    return (
        <div style={columnContainer}>
            <Api article="artanddesign/2021/apr/23/damn-this-is-a-caravaggio-the-inside-story-of-an-old-master-found-in-spain" percentage="60" thumbnail="yes" />
            <hr />
            <img src="https://audioxide-wiki.neocities.org/Images/stevebell.png" alt="Old fashioned advert" />
            <hr />
            <Api article="technology/2021/apr/22/signal-founder-i-hacked-police-phone-cracking-tool-cellebrite" percentage="100" />
            <hr />
            <img src="https://audioxide-wiki.neocities.org/Images/ad2.png" alt="Old fashioned advert" />
            <hr />
            <Api article="lifeandstyle/2020/jan/23/petflix-and-chill-does-your-dog-need-a-streaming-service" percentage="90" />
            <hr />
            <img src="https://audioxide-wiki.neocities.org/Images/ad1.png" alt="Old fashioned advert" />
            <hr />
            <img src="https://audioxide-wiki.neocities.org/Images/ad3.png" alt="Old fashioned advert" />
            <hr />
            <Api article="fashion/2021/apr/12/hawaiian-shirts-fashion-trend-expert" />
            <hr />
            <Api article="technology/2021/apr/22/ransomware-hackers-steal-plans-upcoming-apple-products" thumbnail="yes"/>
        </div>
    )
}

const columnContainer = {
    columnCount: '6',
}

export default Columns