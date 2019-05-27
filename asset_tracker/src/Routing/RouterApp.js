/* eslint-disable no-unused-vars */

import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from '../view/Login/index'
import Signup from '../view/Registration/index'
import Devices from '../view/Devices/index'
import Profile from '../view/Profile/index'
import { ProtectedRoute } from '../protected_route'
import Notifications from '../view/Notifications/index'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    // console.log((localStorage.getItem('loggedInUser')))
    // eslint-disable-next-line no-undef
    const users = JSON.parse(localStorage.getItem('loggedInUser'))
    if (users) {
      this.props.AuthenticateUser(users)
    }
  }
  render () {
    return (
      <div>
        <Route
          path="/"
          exact
          render={history => {
            return <Login {...this.props} history={history} />
          }}
        />
        <Route path="/register" exact component={Signup} />
        <ProtectedRoute
          path="/user"
          exact
          component={Devices}
          typeofuser="user"
          page="home"
          {...this.props}
        />
        <ProtectedRoute
          path="/admin"
          exact
          component={Devices}
          typeofuser="admin"
          page="home"
          {...this.props}
        />
        <ProtectedRoute
          path="/user/devices"
          exact
          component={Devices}
          typeofuser="user"
          page="devices"
          {...this.props}
        />
        <ProtectedRoute
          path="/admin/devices"
          exact
          component={Devices}
          typeofuser="admin"
          page="devices"
          {...this.props}
        />
        {/* <Route path="/user/notifications" exact render={() => <Devices typeofuser="user" page="home"/>} /> */}
        <ProtectedRoute
          path="/user/profile"
          exact
          component={Profile}
          {...this.props}
        />
        <ProtectedRoute
          path="/admin/profile"
          exact
          component={Profile}
          {...this.props}
        />
        <ProtectedRoute
          path="/user/notifications"
          exact
          component={Notifications}
          {...this.props}
        />
        <ProtectedRoute
          path="/admin/notifications"
          exact
          component={Notifications}
          {...this.props}
        />
      </div>
    )
  }
}

export var RouterApp = props => {
  return (
    <BrowserRouter>
      <Home {...props} />
    </BrowserRouter>
  )
}
