/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../Button/index'
import './styles.css'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render () {
    return (
      <div class="navbar">
        <Link className="active" to="/user"><i class="fa fa-fw fa-home"></i> Assets-Tracker</Link>
        <Link to="/user/profile"><i class="fa fa-fw fa-user"></i> </Link>
        <Link to="/user/notifications"><i class="fa fa-fw fa-bell"></i> </Link>
        <Link to="/user/devices"><i class="fa fa-fw fa-mobile"></i> </Link>
        <Link to="/"><Button btnprop='btn btn-danger'>Log out</Button></Link>
      </div>
    )
  }
}
