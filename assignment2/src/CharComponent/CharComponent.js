import React from 'react'

const CharComponent = ({ char, remove }) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={style}>
           <p onClick={remove}>{char}</p> 
        </div>
    )
}

export default CharComponent
