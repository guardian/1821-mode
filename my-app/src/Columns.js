import React from 'react'

import Api from './Api.js';

function Columns() {
    return (
        <div style={columnContainer}>
            <Api />
        </div>
    )
}

const columnContainer = {
    columnCount: '6',
    height: '800px',
}

export default Columns