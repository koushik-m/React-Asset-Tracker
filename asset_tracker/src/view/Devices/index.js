/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
// import Button from '../../components/Button/index'
import Navbar from '../../components/Navbar/index'
// import Card from '../../components/Card/index'
// import * as classes from '../../cssClasses'
import Image from '../../components/Image/index'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import Login from '../Login/index'

export default class Devices extends React.Component {
  render () {
    const { typeofuser } = this.props

    var restcomps
    if (typeofuser === 'admin') {
      restcomps = <React.Fragment>
        <Container>
          <Col md={{ span: 3, offset: 9 }}> <Button color='info'>Add New Device</Button></Col>
          <div className="margin"></div>
          <Row>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Details</Button>{' '}
                  <Button color="dark">Edit</Button>{' '}
                  <Button color="dark">Delete</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Details</Button>{' '}
                  <Button color="dark">Edit</Button>{' '}
                  <Button color="dark">Delete</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Details</Button>{' '}
                  <Button color="dark">Edit</Button>{' '}
                  <Button color="dark">Delete</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div className="margin"></div>
          <Row>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Details</Button>{' '}
                  <Button color="dark">Edit</Button>{' '}
                  <Button color="dark">Delete</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Details</Button>{' '}
                  <Button color="dark">Edit</Button>{' '}
                  <Button color="dark">Delete</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Details</Button>{' '}
                  <Button color="dark">Edit</Button>{' '}
                  <Button color="dark">Delete</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    } else {
      restcomps = <React.Fragment>
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Request</Button>{' '}
                  <Button color="dark">Instant Request</Button>{' '}
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Request</Button>{' '}
                  <Button color="dark">Instant Request</Button>{' '}
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardBody>
                  <CardTitle><strong>iPad</strong></CardTitle>
                </CardBody>
                <CardImg src = {require(`../../shared/ipad.jpg`)} alt="Card image cap" />
                <CardBody>
                  <Button color="dark">Request</Button>{' '}
                  <Button color="dark">Instant Request</Button>{' '}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    }

    return <React.Fragment>
      <Navbar />
      {restcomps}
    </React.Fragment>
  }
}
