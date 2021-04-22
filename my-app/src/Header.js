import React from 'react'

function Header() {
    return (
        <div>
            <header style={headerStyle}>
            <h1>The Manchester Guardian.</h1>
            <hr />
                <p style={sectionOne} class='header-font'>London: Compiled and Published by K. VINER, No. 90, York Way.</p>
                <hr />
                <div style={flexContainer} class='header-font'>
                    <div style={flexItem}><p>No. 1.</p></div>
                    <div style={flexItem}><p style={{textAlign: 'center'}}>FRIDAY, APRIL 23, 2021.</p></div>
                    <div style={flexItem}><p style={{textAlign: 'right'}}>Price seven-pence</p></div>
                </div>
                <hr />
            </header>
        </div>
    )
}


const headerStyle = {
    width: '90%',
    margin: 'auto',
    color: 'transparent',
    textShadow: '0 0 1px rgba(0,0,0,0.9)',
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
    fontSize: '20px',
    fontWeight: 'bold',
}

const flexItem = {
    flex: '1'
}

export default Header