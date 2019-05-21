/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
import Image from '../../components/Image/index'
import Card from '../../components/Card/index'
import Row from '../../components/Row/index'
import Col from '../../components/Col/index'
import Container from '../../components/Container/index'
import Button from '../../components/Button/index'
import Input from '../../components/Input/index'
import Header from '../../components/Header/index'

class Login extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Row>
          <Col md={8}>
            <div className="ipadimage">
              <Image source='ipad1.jpg'/>
            </div>
          </Col>
          <Col md={4}>
            <div className="PSimage"><Image source='sapient.png'/></div>
            <Header headerprop="Login"/>
            <Container>
              <Input placeholder="Username"/>
              <Input placeholder="Password" className="mt-5 mb-5"/>
              <Button btnprop='btn btn-dark'>Login</Button>
              <Button btnprop='btn btn-dark'>Signup</Button>

            </Container>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 4, offset: 4 }}><Image source="AssetLogo.jpg"/></Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Login
