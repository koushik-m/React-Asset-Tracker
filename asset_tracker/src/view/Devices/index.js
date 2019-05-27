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
import Header from '../../Components/Header/index'
import devicedata, { userdata } from '../../Data/index'

export default class Devices extends React.Component {
  render () {
    const { typeofuser, page } = this.props

    var restcomps

    var dynamiccard, userDevices, dynamiccard1
    var cards = []
    var reqdata = {}
    var admindata = []
    if (page === 'home' && typeofuser === 'admin') {
      restcomps = (
        <React.Fragment>
          <Col md={{ offset: 9 }}>
            {' '}
            <Button btnprop="btn btn-dark">Add New Device</Button>
          </Col>
        </React.Fragment>
      )
      for (let j = 0; j < userdata.length; j++) {
        if (userdata[j].role === 'user') {
          admindata.push({
            username: userdata[j].username,
            requestedDevice: userdata[j].requestedDevice
          })
        }
        if (userdata[j].role === 'admin') {
          userdata[j].requested = admindata
        }
      }
      dynamiccard = admindata.map((device, index) => {
        console.log('inside the admin map', device, index)

        return device.requestedDevice.map((item, i) => {
          // console.log('individual devices', device.requestedDevice[i])
          userDevices = devicedata.filter(
            p => p.id === device.requestedDevice[i]
          )
          const { name, img, brand, os } = userDevices[0] || {}
          console.log(device.username, userDevices)
          cards.push({ user: device.username, devices: userDevices })
          return (
            <Col md={4}>
              <div>{device.username}</div>
              <Card
                headerprop={name}
                imgsrc={img}
                company={brand}
                os={os}
                typeofuser={typeofuser}
                page={page}
              />
            </Col>
          )
        })
      })
    } else if (page === 'home' && typeofuser === 'user') {
      restcomps = <Header headerprop="Requested Devices" />
      for (
        var i = 0;
        i < this.props.allUsers.userDetails.requestedDevice.length;
        i++
      ) {
        console.log(this.props.allUsers.userDetails.requestedDevice[i])
        userDevices = this.props.allDevices.filter(
          p => p.id === this.props.allUsers.userDetails.requestedDevice[i]
        )
        cards.push(userDevices)
      }
      console.log(cards)
      dynamiccard = cards.map(function (device, index) {
        return (
          <Col md={4}>
            <Card
              headerprop={device[0].name}
              imgsrc={device[0].img}
              company={device[0].brand}
              os={device[0].os}
              typeofuser={typeofuser}
              page={page}
            />
          </Col>
        )
      })
    }
    if (page === 'devices') {
      dynamiccard = this.props.allDevices.map(function (device, index) {
        return (
          <Col md={4}>
            <Card
              headerprop={device.name}
              imgsrc={device.img}
              company={device.brand}
              os={device.os}
              typeofuser={typeofuser}
              page={page}
            />
          </Col>
        )
      })
    }
    console.log(dynamiccard, '===============>')
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        {restcomps}
        <div className="margin" />
        <Container>
          <div className="margin" />
          <Row>{dynamiccard}</Row>
        </Container>
      </React.Fragment>
    )
  }
}
