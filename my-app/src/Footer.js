import React from 'react'

function Footer() {
    return (
        <footer style={footerStyle}>
            <hr />
            <p class='footer-font'>1821-2021 Guardian News & Media Limited or its affiliated companies. All rights reserved.</p>
        </footer>
    )
}

const footerStyle = {
    textAlign: 'center',
    padding: '20px 0px',
}

export default Footer