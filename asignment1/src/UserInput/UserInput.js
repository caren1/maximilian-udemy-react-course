import React from 'react'

const UserInput = ({ usernameChange }) => {
    return (
        <>
         <input type="text" onChange={usernameChange} />
        </>
    )
}

export default UserInput
