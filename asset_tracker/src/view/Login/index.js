/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
import Image from '../../components/Image/index'
import Card from '../../components/Card/index'
import * as classes from '../../cssClasses'
import { Container, Row, Col } from 'reactstrap'
import Button from '../../components/Button/index'

class Login extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Card headerprop="hey" imgsrc="ipad.jpg" company="apple" os="mac" typeofuser="admin"/>
          </Col>
          <Col md={4}>
            <Card headerprop="hey" imgsrc="ipad.jpg" company="apple" os="mac" typeofuser="admin"/>
          </Col>
          <Col md={4}>
            <Card headerprop="hey" imgsrc="ipad.jpg" company="apple" os="mac" typeofuser="admin"/>
            <Button btnprop="btn btn-dark">Click</Button>
          </Col>
        </Row>
      </Container>)
  }
}
console.log(Login)
export default Login
