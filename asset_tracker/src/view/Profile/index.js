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

export default class Profile extends React.Component {
  render () {
    const { typeofuser } = this.props

    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <Container>
          <div className="margin" />
          <Row>
            <Col md={6}>
              <div className="img">
                <Image source="user_account_image.jpg" />
              </div>
            </Col>
            <Col md={6}>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td id="name_table">
                      {this.props.allUsers.userDetails.name}
                    </td>
                  </tr>

                  <tr>
                    <td>UserName:</td>
                    <td>{this.props.allUsers.userDetails.username}</td>
                  </tr>
                  <tr>
                    <td>Credit Limit:</td>
                    <td> 100$</td>
                  </tr>
                  <tr>
                    <td>Credit Used:</td>
                    <td>20$</td>
                  </tr>
                  <tr>
                    <td>Credit Left:</td>
                    <td>80$</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
