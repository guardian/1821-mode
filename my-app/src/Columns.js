import React from 'react'

import Api from './Api.js';

import PuritySaltAd from './Images/PuritySaltAd.png';
import HopeIsPower from './Images/HopeIsPower.png';
import HarvardsTeethAd from './Images/HarvardsTeethAd.png';
import CarrossierAd from './Images/CarrossierAd.png';
import LifebuoySoapAd from './Images/LifebuoySoapAd.png';

function Columns() {
    return (
        <div class="column-container">
            <Api article="artanddesign/2021/apr/23/damn-this-is-a-caravaggio-the-inside-story-of-an-old-master-found-in-spain" percentage="60" />
                <hr />
            <a href="https://support.theguardian.com/" target="_blank" rel="noreferrer"><img className="contribution-cta" src={HopeIsPower} alt="Old fashioned advert" /></a>
             <hr />
            <Api article="technology/2021/apr/22/signal-founder-i-hacked-police-phone-cracking-tool-cellebrite" percentage="100" />
            <hr />
            <img src={LifebuoySoapAd} alt="Old fashioned advert" />
            <hr />
            <Api article="lifeandstyle/2020/jan/23/petflix-and-chill-does-your-dog-need-a-streaming-service" percentage="90" />
            <hr />
            <img src={CarrossierAd} alt="Old fashioned advert" />
            <hr />
            <img src={HarvardsTeethAd} alt="Old fashioned advert" />
            <hr />
            <Api article="fashion/2021/apr/12/hawaiian-shirts-fashion-trend-expert" />
            <hr />
            <img src={PuritySaltAd} alt="Old fashioned advert" />
            <hr />
            <Api article="technology/2021/apr/22/ransomware-hackers-steal-plans-upcoming-apple-products" />
        </div>
    )
}

export default Columns