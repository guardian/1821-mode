import React from 'react'

function Header() {
    return (
        <div>
            <header>
            <h1>The Manchester Guardian.</h1>
            <hr />
                <p style={divStyle} class='header-font'>printed in london</p>
                <hr />
                <div class={subHeaderStyle}>
                    <p>No. 1.</p>
                    <p style={divStyle} class='header-font'>FRIDAY, APRIL 23, 2021.</p>
                    <p style={divStyle}>price seven-pence</p>
                </div>
                    <hr />
                
            </header>
        </div>
    )
}

const divStyle = {
    // color: 'blue',
    fontSize: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
};

const subHeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    color: 'blue'
}

export default Header