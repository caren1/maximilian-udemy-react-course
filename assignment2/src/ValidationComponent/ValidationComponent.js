import React from 'react'

const ValidationComponent = ({ textLength }) => {


    if (textLength < 5) {
        return <h1>Text is too short</h1>
    } else {
        return <h1>Text is long enough </h1>
    }
}

export default ValidationComponent
