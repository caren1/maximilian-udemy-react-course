import React from 'react'

const UserInput = ({ username, usernameChange }) => {
    return (
        <>
         <input type="text" value={username} onChange={usernameChange} />
        </>
    )
}

export default UserInput
