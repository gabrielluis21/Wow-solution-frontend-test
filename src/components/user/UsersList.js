import React from 'react';
import { Link } from 'react-router-dom'
import UserSummary from './UserSummary'


const UsersList = ({ users }) => {
    return(
        <div className="user-list section">
            { users && users.map(user => {
                return(
                    <Link to={'/user/' + user._id} key={user._id}>
                      <UserSummary user={user} />
                    </Link>
                  )
                })
             }
        </div>
    )
}

export default UsersList