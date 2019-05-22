import React from 'react'
import './styles.css'

export default class Header extends React.Component {
  render () {
    const { headerprop } = this.props

    return <h4>{headerprop}</h4>
  }
}
