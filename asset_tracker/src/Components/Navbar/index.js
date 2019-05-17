/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'

export default class Navbar extends React.Component {
  render () {
    return (
      <div class="navbar">
        <a class="active" href="../user/user_home.html"><i class="fa fa-fw fa-home"></i> Assets-Tracker</a>
        <a href="../user/user_my_account.html"><i class="fa fa-fw fa-user"></i> </a>
        <a href="../user/user_notification.html"><i class="fa fa-fw fa-bell"></i> </a>
        <a href="../user/user_devices.html"><i class="fa fa-fw fa-mobile"></i> </a>
      </div>
    )
  }
}
