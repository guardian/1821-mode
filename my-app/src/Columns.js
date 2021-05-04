import React from 'react'

import Api from './Api.js';

import PuritySaltAd from './Images/PuritySaltAd.png';
import HopeIsPower from './Images/HopeIsPower.png';
import CarrossierAd from './Images/CarrossierAd.png';
import LifebuoySoapAd from './Images/LifebuoySoapAd.png';
import FrancisPrestonAd from './Images/FrancisPrestonAd.png';
import HartSonPeardCoAd from './Images/HartSonPeardCoAd.png';
import OrchestrionAd from './Images/OrchestrionAd.png';
import PeerlessDictionaryAd from './Images/PeerlessDictionaryAd.png';
import SeigelsSyrupAd from './Images/SeigelsSyrupAd.png';

const articlesJson = require("./capi-data/all.json");
    
function Columns() {
    return (
        <div class="column-container">
            <Api article={articlesJson[0]} percentage="60" />
            <hr />
            <a href="https://support.theguardian.com/" target="_blank" rel="noreferrer"><img className="contribution-cta" src={HopeIsPower} alt="Old fashioned advert" /></a>
            <hr />
            <Api article={articlesJson[1]} percentage="100" />
            <hr />
            <img src={CarrossierAd} alt="Old fashioned advert for a Carrossier" />
            <img src={PeerlessDictionaryAd} alt="Old fashioned advert for the Peerless Dictionary" />
            <hr />
            <Api article={articlesJson[2]} percentage="90" />
            <hr />
            <img src={PuritySaltAd} alt="Old fashioned advert for Purity table salt" />
            <hr />
            <Api article={articlesJson[3]} />
            <hr />
            <Api article={articlesJson[4]} />
            <img src={FrancisPrestonAd} alt="Old fashioned advert for Francis Preston arms" />
            <img src={HartSonPeardCoAd} alt="Old fashioned advert for communion plate manufacturers" />
            <img src={OrchestrionAd} alt="Old fashioned advert for organ builders" />
            <img src={SeigelsSyrupAd} alt="Old fashioned advert for Seigels Syrup" />
            <img src={LifebuoySoapAd} alt="Old fashioned advert for Lifebuoy Soap" />
        </div>
    )
}

export default Columns
