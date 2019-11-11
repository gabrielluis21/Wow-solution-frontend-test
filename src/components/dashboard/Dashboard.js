import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import UsersList from '../user/UsersList'
import AllCitiesDashboard from './AllCitiesDashboard'

const Dashboard = (props) => {
  //render() {
    const {auth, users, cities } = props
    console.log(auth, users, cities )
    if(!auth.token) return <Redirect to="/signIn" />

    return (
        <div className="dashborad container">
          <div className="row">
            <div className="col s12 m6">
              <UsersList users={users} />
            </div>
            <div className="col s12 m5 offset-m1">
              <AllCitiesDashboard cities={cities} />
            </div>
          </div>
        </div>
    )
  //}
}


const mapStateToProps = state => ({
    auth: state.auth.currentUser,
    users: state.user.users,
    cities: state.city.cities
})

export default connect(mapStateToProps)(Dashboard)