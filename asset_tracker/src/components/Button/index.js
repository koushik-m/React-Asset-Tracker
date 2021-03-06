import React from 'react'
import './styles.css'

export default class Button extends React.Component {
  render () {
    const { onPress, children, btnprop, id } = this.props
    return (
      <button type="button" className={`${btnprop}`} onClick={onPress} id={id}>
        {children}
      </button>
    )
  }
}
