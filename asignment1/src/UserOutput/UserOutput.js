import React from 'react'

const UserOutput = ({ username }) => {

    const userOutputStyle = {
        padding: '1em',
        border: '1px solid black',
        fontSize: '15px',
        borderRadius: '20px',
        width: '150px',
        height: '100%',
        margin: '1em'
    }

    return (
        <div style={userOutputStyle}>
            <p>Hello there, {username}!</p>
            <p>User output here</p>
        </div>
    )
}

export default UserOutput
