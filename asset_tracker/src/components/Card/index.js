/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'
import Image from '../Image/index'
import Header from '../Header/index'
import Button from '../Button/index'
import Label from '../Label/index'

export default class Card extends React.Component {
  render () {
    const { headerprop, imgsrc, company, os, typeofuser } = this.props
    if (typeofuser === 'admin') {
      return (
        <div className="card">
          <Image source={imgsrc} />
          <Header headerprop={headerprop} />
          <Label labelprop={company} />
          <Label labelprop={os} />
          <Button btnprop='btn btn-dark'>Details</Button>
          <Button btnprop='btn btn-dark'>Edit</Button>
          <Button btnprop="btn btn-dark">Delete</Button>
        </div>
      )
    } else {
      return (
        <div className="card">
          <Image source={imgsrc} />
          <Header headerprop={headerprop} />
          <Label labelprop={company} />
          <Label labelprop={os} />
          <Button btnprop='btn btn-dark'>Request</Button>
          <Button btnprop="btn btn-dark">Instant Request</Button>
        </div>
      )
    }
  }
}
