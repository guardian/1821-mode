import React from 'react'

import Api from './Api.js';

import HopeIsPower from './Images/HopeIsPower.png';
import BasinsAd from './Images/BasinsAd.png';
import ChurchmansAd from './Images/ChurchmansAd.png';
import NoseReshaperAd from './Images/NoseReshaperAd.png';
import SmokeBallAd from './Images/SmokeBallAd.png';

const articlesJson = require("./capi-data/all.json");
    
function Columns() {
    return (
        <div class="column-container">
            <Api article={articlesJson[0]} percentage="60" />
            <hr />
            <a href="https://support.theguardian.com/" target="_blank" rel="noreferrer"><img className="contribution-cta" src={HopeIsPower} alt="The Guardian's 'Hope is power' campaign poster" /></a>
            <hr />
            <Api article={articlesJson[1]} percentage="100" />
            <hr />
            <img src={BasinsAd} alt="Old fashioned advert for a wash basins" />
            <hr />
            <Api article={articlesJson[2]} percentage="90" />
            <hr />
            <img src={ChurchmansAd} alt="Old fashioned advert for Churchman's cigarettes" />
            <hr />
            <Api article={articlesJson[3]} />
            <hr />
                <img src={NoseReshaperAd} alt="Old fashioned advert for nose reshapers" />
                <hr />
            <Api article={articlesJson[4]} />
                <hr />
            <img src={SmokeBallAd} alt="Old fashioned advert for carbolic smoke balls" />
        </div>
    )
}

export default Columns
