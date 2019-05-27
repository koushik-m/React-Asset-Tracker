/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
import Image from '../../Components/Image/index'
import Card from '../../Components/Card/index'
import Row from '../../Components/Row/index'
import Col from '../../Components/Col/index'
import Container from '../../Components/Container/index'
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import Header from '../../Components/Header/index'
import { Link } from 'react-router-dom'
import Auth from '../../auth'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleKeyPress (target) {
    if (target.charCode === 13) {
      document.getElementById('myBtn').click()
    }
  }
  validate = () => {
    this.props.AuthenticateUser(this.state)
  }
  enter = e => {}
  render () {
    if (this.props.allUsers.isUserLoggedIn) {
      Auth.login()
      if (this.props.allUsers.userDetails.role === 'user') {
        this.props.history.history.push('/user')
      } else if (this.props.allUsers.userDetails.role === 'admin') {
        this.props.history.history.push('/admin')
      }
    }
    return (
      <React.Fragment>
        <Row>
          <Col md={8}>
            <div className="ipadimage">
              <Image source="ipad1.jpg" />
            </div>
          </Col>
          <Col md={4}>
            <div className="PSimage">
              <Image source="sapient.png" />
            </div>
            <Header headerprop="Login" />
            <Container>
              <Input
                placeholder="Username"
                ref="username"
                value={this.state.username}
                onChange={e => {
                  return this.setState({ username: e.target.value })
                }}
              />
              <Input
                placeholder="Password"
                className="mt-5 mb-5"
                id="myInput"
                ref="password"
                value={this.state.password}
                onKeyPress={this.handleKeyPress}
                onChange={e => {
                  return this.setState({ password: e.target.value })
                }}
              />
              <Button
                btnprop="btn btn-dark"
                onPress={this.validate.bind(this)}
                id="myBtn"
              >
                Login
              </Button>
              <Link to="/register">
                <Button btnprop="btn btn-dark">Signup</Button>
              </Link>
            </Container>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={{ size: 4, offset: 4 }}>
            <Image source="AssetLogo.jpg" />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Login
