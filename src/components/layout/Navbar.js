import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'

const Navbar = (props) => {
    const { auth, currentUser } = props;

    const links = auth.currentUser.token ? <SignedInLinks profile={currentUser}/> : <SignedOutLinks />
    
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to="/" className="brand-logo" >Wow Solution</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
      auth: state.auth,
      currentUser: state.auth.currentUser.user
    }
  }

export default connect(mapStateToProps)(Navbar)