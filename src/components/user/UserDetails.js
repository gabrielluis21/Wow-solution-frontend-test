import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { deletedUserDelete } from '../../store/actions/usersActions';


const UserDetails = (props) => {

    const {user, auth} = props
    if (!auth.token) return <Redirect to='/signin' /> 

    if(user){
        return(
            <div className="container section">
                <div className="row">
                    <div className="card z-depth-0 col s12 m6">
                        <div className="card-content">
                            <span className="card-title">{user.name}</span>
                            <p>{user.email}</p>
                            <p>{user.role}</p>
                            <p>{user.city}</p>
                            <p>{user.country}</p>
                        </div>                    
                        <div className="card-action">
                            <button className="waves-effect waves-teal btn-flat" onClick={() => {
                                props.deleteUser(user._id);
                                props.history.push('/');
                            }} >
                                <i className="material-icons">remove_circle</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }else{
        return (
            <div className="container center">
              <p>Loading User..</p>
            </div>
          )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const users = state.user.users;
    const user = users ? users.find(user => {
        return user._id === id
    }) : null
    return {
        auth: state.auth.currentUser,
        user: user
    }
};

const mapDispatchToProps = dispatch => ({
    deleteUser: _id => dispatch(deletedUserDelete(_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)