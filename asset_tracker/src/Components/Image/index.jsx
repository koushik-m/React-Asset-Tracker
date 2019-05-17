import React from 'react'
import './styles.css'

const Image = ({ source }) => {
  //console.log(source);
  return(
     <img src={require(`../../shared/${source}`)} alt="" className="image1" />
  )
}
export default Image
