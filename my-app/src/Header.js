import React from 'react'

function Header() {
    return (
        <div>
            <header>
            <h1>The Manchester Guardian.</h1>
            <hr />
                <p style={divStyle}>Printed in London</p>
                <hr />
                    <p>Date</p>
                    <hr />
            </header>
        </div>
    )
}

const divStyle = {
    color: 'blue',
    fontSize: '20px'
};

export default Header