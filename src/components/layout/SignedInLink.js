import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'


const SignedInLinks = (props) => {
    return (  
        <ul className="right">
            <li><NavLink to="/addUser">Add user</NavLink></li>
            <li><NavLink to="/addCity">Add City</NavLink></li>
            <li><button className="btn-flat" onClick={props.logoutUser} >Log out</button></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">
                {props.profile.name}
                </NavLink>
            </li>
        </ul>  
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      logoutUser: () => dispatch(logoutUser())
    }
  }

export default connect(null, mapDispatchToProps)(SignedInLinks)