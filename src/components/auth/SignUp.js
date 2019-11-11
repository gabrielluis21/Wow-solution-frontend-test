import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userSignUpFetch } from '../../store/actions/authActions'


class SignUp extends Component {
    state = {
        name:'',
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
     this.props.userSignUpFetch(this.state)
    }
   
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="passward">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn indigo darken-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userSignUpFetch: userInfo => dispatch(userSignUpFetch(userInfo))
  })
  
export default connect(null, mapDispatchToProps)(SignUp);