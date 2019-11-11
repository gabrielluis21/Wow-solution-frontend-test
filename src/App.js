import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AddUser from './components/user/AddUser'
import UserDetails from './components/user/UserDetails'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import AddCity from './components/cities/AddCity'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/addUser" component={AddUser} /> 
            <Route path="/addCity" component={AddCity}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

