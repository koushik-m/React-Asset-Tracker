/* eslint-disable no-unused-vars */

import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from '../view/Login/index'
import Signup from '../view/Registration/index'
import Devices from '../view/Devices/index'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Signup} />
        <Route path="/user" exact render={() => <Devices typeofuser="user" page="home"/>} />
        <Route path="/user/devices" exact render={() => <Devices typeofuser="user" page="devices"/>} />
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
