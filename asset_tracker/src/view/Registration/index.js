/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
import Image from '../../Components/Image/index'
import Row from '../../Components/Row/index'
import Col from '../../Components/Col/index'
import Container from '../../Components/Container/index'
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import Header from '../../Components/Header/index'

class Signup extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Row>
          <Col md={6} className="bgc">
            <div className="PSimage">
              <Image source="sapient.png" />
            </div>
          </Col>
          <Col md={6}>
            <div className="margin" />
            <Header headerprop="Sign Up" />

            <Container>
              <Input placeholder="Name" className="mt-5 mb-5" />
              <Input placeholder="Username" className="mt-5 mb-5" />
              <Input placeholder="Email" className="mt-5 mb-5" />
              <Input placeholder="Password" className="mt-5 mb-5" />
              <Input placeholder="Confirm Password" className="mt-5 mb-5" />

              <Button btnprop="btn btn-dark">Register</Button>
            </Container>
          </Col>
        </Row>
        {/* <Row>
          <Col md={{ size: 4, offset: 4 }}><Image source="AssetLogo.jpg"/></Col>
        </Row> */}
      </React.Fragment>
    )
  }
}
export default Signup
