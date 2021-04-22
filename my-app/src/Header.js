import React from 'react'

function Header() {
    return (
        <div>
            <header>
            <h1>The Manchester Guardian.</h1>
            <hr />
                <p style={sectionOne} class='header-font'>London: Compiled and Published by K. VINER, No. 90, York Way.</p>
                <hr />
                <div style={flexContainer}>
                    <div style={flexItem}>No. 1</div>
                    <div style={flexItem}>Friday, April 23, 2021.</div>
                    <div style={flexItem}>Price seven-pence</div>
                </div>
                <hr />
            </header>
        </div>
    )
}

const sectionOne = {
    fontSize: '20px',
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'transparent',
    textShadow: '0 0 1px rgba(0,0,0,0.9)',
};

const flexContainer = {
    display: 'flex',
    flexWrap: 'nowrap',
}

const flexItem = {
    flex: '1'
}

export default Header