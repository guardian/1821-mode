import React from 'react'

function Header() {
    return (
            <header style={headerStyle}>
            <h1>The Manchester Guardian.</h1>
            <hr />
                <p style={sectionOne} class='header-font'>London: Compiled and Published by K. VINER, No. 90, York Way.</p>
                <hr style={headerDivider} />
                <div style={flexContainer} class='header-font'>
                    <div style={flexItem}><p>No. 1.</p></div>
                    <div style={flexItem}><p style={{textAlign: 'center'}}>FRIDAY, APRIL 23, 2021.</p></div>
                    <div style={flexItem}><p style={{textAlign: 'right'}}>Price seven-pence</p></div>
                </div>
                <hr style={headerDivider} />
            </header>
    )
}


const headerStyle = {
    color: 'transparent',
    textShadow: '0 0 1px rgba(0,0,0,0.9)',
}

const sectionOne = {
    fontSize: '15px',
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

const headerDivider = {
    border: '2px solid darkgray',
}

export default Header