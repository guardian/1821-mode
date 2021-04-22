import React from 'react'

function Header() {
    return (
        <div>
            <header>
            <h1>The Manchester Guardian.</h1>
            <hr />
                <p style={divStyle} class='header-font'>printed in london</p>
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

const divStyle = {
    fontSize: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
};

const flexContainer = {
    display: 'flex',
    flexWrap: 'nowrap',
}

const flexItem = {
    flex: '1'
}

export default Header