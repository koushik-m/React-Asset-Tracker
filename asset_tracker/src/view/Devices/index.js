/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
// import Button from '../../components/Button/index'
import Navbar from '../../components/Navbar/index'
// import Card from '../../components/Card/index'
// import * as classes from '../../cssClasses'
import Image from '../../components/Image/index'
import Row from '../../components/Row/index'
import Col from '../../components/Col/index'
import Container from '../../components/Container/index'
import Card from '../../components/Card/index'
import Button from '../../components/Button/index'
import Login from '../Login/index'

export default class Devices extends React.Component {
  render () {
    const { typeofuser, page } = this.props

    var restcomps
    if (typeofuser === 'admin') {
      restcomps = <React.Fragment>
        <Col md={{ offset: 9 }}> <Button btnprop='btn btn-dark'>Add New Device</Button></Col>
      </React.Fragment>
    }

    return <React.Fragment>
      <Navbar />
      {restcomps}
      <Container>
        <div className="margin"></div>
        <Row>
          <Col md={4}>
            <Card headerprop="iPad" imgsrc="ipad.jpg" company="Apple" os="Mac" typeofuser={typeofuser} page={page} />
          </Col>
          <Col md={4}>
            <Card headerprop="iPad" imgsrc="ipad.jpg" company="Apple" os="Mac" typeofuser={typeofuser} page={page} />
          </Col>
          <Col md={4}>
            <Card headerprop="iPad" imgsrc="ipad.jpg" company="Apple" os="Mac" typeofuser={typeofuser} page={page}/>
          </Col>
        </Row>
        <div className="margin"></div>
        <Row>
          <Col md={4}>
            <Card headerprop="iPad" imgsrc="ipad.jpg" company="Apple" os="Mac" typeofuser={typeofuser} page={page}/>
          </Col>
          <Col md={4}>
            <Card headerprop="iPad" imgsrc="ipad.jpg" company="Apple" os="Mac" typeofuser={typeofuser} page={page}/>
          </Col>
          <Col md={4}>
            <Card headerprop="iPad" imgsrc="ipad.jpg" company="Apple" os="Mac" typeofuser={typeofuser} page={page}/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  }
}
