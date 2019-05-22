/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
// import Button from '../../Components/Button/index'
import Navbar from '../../Components/Navbar/index'
// import Card from '../../Components/Card/index'
// import * as classes from '../../cssClasses'
import Image from '../../Components/Image/index'
import Row from '../../Components/Row/index'
import Col from '../../Components/Col/index'
import Container from '../../Components/Container/index'
import Card from '../../Components/Card/index'
import Button from '../../Components/Button/index'
import Login from '../Login/index'

export default class Devices extends React.Component {
  render () {
    const { typeofuser, page } = this.props

    var restcomps
    if (typeofuser === 'admin') {
      restcomps = (
        <React.Fragment>
          <Col md={{ offset: 9 }}>
            {' '}
            <Button btnprop="btn btn-dark">Add New Device</Button>
          </Col>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <Navbar />
        {restcomps}
        <Container>
          <div className="margin" />
          <Row>
            <Col md={4}>
              <Card
                headerprop="iPad"
                imgsrc="ipad.jpg"
                company="Apple"
                os="Mac"
                typeofuser={typeofuser}
                page={page}
              />
            </Col>
            <Col md={4}>
              <Card
                headerprop="iPad"
                imgsrc="ipad.jpg"
                company="Apple"
                os="Mac"
                typeofuser={typeofuser}
                page={page}
              />
            </Col>
            <Col md={4}>
              <Card
                headerprop="iPad"
                imgsrc="ipad.jpg"
                company="Apple"
                os="Mac"
                typeofuser={typeofuser}
                page={page}
              />
            </Col>
          </Row>
          <div className="margin" />
          <Row>
            <Col md={4}>
              <Card
                headerprop="iPad"
                imgsrc="ipad.jpg"
                company="Apple"
                os="Mac"
                typeofuser={typeofuser}
                page={page}
              />
            </Col>
            <Col md={4}>
              <Card
                headerprop="iPad"
                imgsrc="ipad.jpg"
                company="Apple"
                os="Mac"
                typeofuser={typeofuser}
                page={page}
              />
            </Col>
            <Col md={4}>
              <Card
                headerprop="iPad"
                imgsrc="ipad.jpg"
                company="Apple"
                os="Mac"
                typeofuser={typeofuser}
                page={page}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
