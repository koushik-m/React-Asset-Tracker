/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
import Navbar from '../../Components/Navbar/index'
import Image from '../../Components/Image/index'
import Row from '../../Components/Row/index'
import Col from '../../Components/Col/index'
import Container from '../../Components/Container/index'
import Card from '../../Components/Card/index'
import Button from '../../Components/Button/index'
import Login from '../Login/index'
import Alert from '../../Components/Alert/index'

export default class Notifications extends React.Component {
  render () {
    const { typeofuser } = this.props

    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <Container>
          <div className="margin" />
          <Alert color="success">This is a success alert — check it out!</Alert>
          <div className="margin" />
          <Alert color="danger">Return the asset as soon as possible</Alert>
          <div className="margin" />
          <Alert color="primary">This is a success alert — check it out!</Alert>
          <div className="margin" />
          <Alert color="warning">This is a success alert — check it out!</Alert>
        </Container>
      </React.Fragment>
    )
  }
}
