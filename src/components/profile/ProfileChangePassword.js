import React, { Component } from 'react';

class ProfileChangePassword extends Component {
    state = {
        newPassowrd: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changePassword(this.state)
    }

    render(){
        return (
            <div className="card s-depth-0">
                <div className="card-content grey-text grey-darken-3">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Change password</h5>
                        <div className="input-field">
                            <label htmlFor="passward">New Password</label>
                             <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                    </form>
                </div>
            </div>
         )
    }

}

export default ProfileChangePassword