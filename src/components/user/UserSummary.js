import React from 'react';


const UserSummary = ({user}) =>{

    return(
        <div className="card z-depth-0 user-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{user.name}</span>
                <p>{user.email}</p>
                <p>{user.city}</p>
                <p>{user.country}</p>
            </div>
        </div>
    )
}

export default UserSummary