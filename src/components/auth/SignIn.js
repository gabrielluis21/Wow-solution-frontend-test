import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { userLoginFetch } from '../../store/actions/authActions';

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userLoginFetch(this.state)
  }

  render(){
    const { authError, auth } = this.props;
    if(auth.token)
      return <Redirect to="/" />

    return (
      <div className="container">
       <form onSubmit={this.handleSubmit} autoComplete="off">         
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email" >Email Address: </label>
          <input type="email" id="email" onChange={this.handleChange}  required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <button className="btn indigo darken-1 z-depth-0">Sign In</button>
          <div className="center red-text">
            { authError ? <p>{authError}</p> : null }
           </div>
        </div>
      </form>
    </div>
    )
  }
 
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.error,
    auth: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)