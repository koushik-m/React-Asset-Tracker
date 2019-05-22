/* eslint-disable no-unused-vars */

import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from '../view/Login/index'
import Signup from '../view/Registration/index'
import Devices from '../view/Devices/index'
import { ProtectedRoute } from '../protected_route'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    // console.log((localStorage.getItem('loggedInUser')))
    // eslint-disable-next-line no-undef
    const users = JSON.parse(localStorage.getItem('loggedInUser'))
    if (users) this.props.AuthenicateUser(users)
  }
  render () {
    return (
      <div>
        <Route path="/" render={(history) => <Login {...this.props} history={history}/>} />
        <ProtectedRoute path="/register" exact component={Signup} />
        <ProtectedRoute path="/user" exact component={Devices} typeofuser="user" page="home" />
        <ProtectedRoute path="/user/devices" exact component={Devices} typeofuser="user" page="devices"/>
        {/* <Route path="/user/notifications" exact render={() => <Devices typeofuser="user" page="home"/>} /> */}
        {/* <Route path="/user/profile" exact component={UserProfile} /> */}
      </div>
    )
  }
}

export var RouterApp = () => {
  return <BrowserRouter>
    <Home />
  </BrowserRouter>
}
