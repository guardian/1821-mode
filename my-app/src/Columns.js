import React from 'react'

import Api from './Api.js';

import PuritySaltAd from './Images/PuritySaltAd.png';
import SupportGuardianAd from './Images/SupportGuardianAd.png';
import CarrossierAd from './Images/CarrossierAd.png';
import FrancisPrestonAd from './Images/FrancisPrestonAd.png';
import HartSonPeardCoAd from './Images/HartSonPeardCoAd.png';
import OrchestrionAd from './Images/OrchestrionAd.png';
import PeerlessDictionaryAd from './Images/PeerlessDictionaryAd.png';
import SeigelsSyrupAd from './Images/SeigelsSyrupAd.png';

const articlesJson = require("./capi-data/all.json");
    
function Columns() {
    return (
        <div class="column-container">
            <Api article={articlesJson[0]} percentage="50" />
            <hr />
            <a href="https://support.theguardian.com/contribute?acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_OTHER%22%2C%22componentId%22%3A%22G200_1821_front_ad%22%2C%22campaignCode%22%3A%22G200_1821_front_ad%22%7D&INTCMP=G200_1821_front_ad" target="_blank" rel="noreferrer"><img className="contribution-cta" src={SupportGuardianAd} alt="Support the Guardian" /></a>
            <hr />
            <Api article={articlesJson[1]} percentage="80" />
            <hr />
            <img src={CarrossierAd} alt="Old fashioned advert for a Carrossier" />
            <img src={PeerlessDictionaryAd} alt="Old fashioned advert for the Peerless Dictionary" />
            <hr />
            <Api article={articlesJson[2]} percentage="90" />
            <hr />
            <img src={HartSonPeardCoAd} alt="Old fashioned advert for communion plate manufacturers" />
            <hr />
            <Api article={articlesJson[3]} percentage="80" />
            <hr />
            <Api article={articlesJson[4]} percentage="90" />
                <hr />
            <img src={PuritySaltAd} alt="Old fashioned advert for Purity table salt" />
                <hr />
                <Api article={articlesJson[5]} />
        </div>
    )
}

export default Columns
