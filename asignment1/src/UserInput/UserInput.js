import React from 'react'
import './UserInput.css'

const UserInput = ({ username, usernameChange }) => {
    return (
        <div className="userInput">
         <input placeholder="Username" type="text" value={username} onChange={usernameChange} />
        </div>
    )
}

export default UserInput
