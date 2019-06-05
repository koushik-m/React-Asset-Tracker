/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../Button/index';
import './styles.css';
import { Link } from 'react-router-dom';
import Auth from '../../auth';

export default class Navbar extends React.Component {
  logUserOut = () => {
    this.props.Logout();
    localStorage.removeItem('loggedInUser');
    this.props.history.push('/');
  };
  render() {
    console.log('inside navbar', this.props.allUsers.userDetails.role);
    if (this.props.allUsers.userDetails.role === 'admin') {
      return (
        <div className="navbar">
          <Link className="active" to="/admin">
            <i className="fa fa-fw fa-home" /> Assets-Tracker
          </Link>
          <Link to="/admin/profile">
            <i className="fa fa-fw fa-user" />{' '}
          </Link>
          <Link to="/admin/notifications">
            <i className="fa fa-fw fa-bell" />{' '}
          </Link>
          <Link to="/admin/devices">
            <i className="fa fa-fw fa-mobile" />{' '}
          </Link>
          <Button btnprop="btn btn-danger" onPress={this.logUserOut}>
            Log out
          </Button>
        </div>
      );
    } else if (this.props.allUsers.userDetails.role === 'user') {
      return (
        <div className="navbar">
          <Link className="active" to="/user">
            <i className="fa fa-fw fa-home" /> Assets-Tracker
          </Link>
          <Link to="/user/profile">
            <i className="fa fa-fw fa-user" />{' '}
          </Link>
          <Link to="/user/notifications">
            <i className="fa fa-fw fa-bell" />{' '}
          </Link>
          <Link to="/user/devices">
            <i className="fa fa-fw fa-mobile" />{' '}
          </Link>
          <Button btnprop="btn btn-danger" onPress={this.logUserOut}>
            Log out
          </Button>
        </div>
      );
    }
  }
}
