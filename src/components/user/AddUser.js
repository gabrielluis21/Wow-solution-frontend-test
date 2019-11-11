import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addUserPost } from '../../store/actions/usersActions'
import { Redirect } from 'react-router-dom'

class AddUser extends Component {

    state = {
        name:'',
        email:'',
        password:'',
        role:'',
        city:'',
        country:'',
    };
    
    handleChange =(e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUserPost(this.state);
        this.props.history.push('/');
    }

    render(){
        const { auth } = this.props;

        if(!auth.token) return <Redirect to="/signin" />
        
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} autoComplete={false} className="white">
                    <h5 className="grey-text text-darken-3">Add a new User</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">Name</label>
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
                        <label htmlFor="role">Role</label>
                        <input type="text" id="role" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn indigo darken-1 z-depth-0">Add User</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth.currentUser
});

const mapDispatchToProps = dispatch =>({
    addUserPost: newUser => dispatch(addUserPost(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)