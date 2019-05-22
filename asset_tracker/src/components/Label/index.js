import React from 'react'
import './styles.css'
export default class Header extends React.Component {
  render () {
    const { labelprop } = this.props

    return <p>{labelprop}</p>
  }
}
