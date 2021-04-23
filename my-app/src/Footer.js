import React from 'react'

function Footer() {
    return (
        <footer style={footerStyle}>
            <hr />
            <p class='footer-font'>Guardian News & Media, 1821-2021.</p>
        </footer>
    )
}

const footerStyle = {
    textAlign: 'center',
    padding: '20px 0px',
}

export default Footer