import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addCityPost } from '../../store/actions/cityActions'
import { Redirect } from 'react-router-dom'

class AddCity extends Component {
    state = {
        name:''
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCity(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;

        if(!auth.token) return <Redirect to="/signin" />

        return (
            <div className="add-city container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Add a new City</h5>
                    <div className="input-field">
                       <label htmlFor="firstName">Name</label>
                       <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn indigo darken-1 z-depth-0">Add City</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth.currentUser
  });
  
const mapDispatchToProps = dispatch =>({
    addCity: newUser => dispatch(addCityPost(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)
