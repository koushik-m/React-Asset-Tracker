/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'

const Image = ({ source }) => {
  return (
    <img
      src={source ? require(`../../shared/${source}`) : ''}
      alt=""
      className="image1"
    />
  )
}
export default Image
