import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RouterApp } from './Routing/RouterApp'

import * as allactions from './Actions/ActionCreator'

function mapStateToProps (store) {
  return {
    allUsers: store.userdata,
    allDevices: store.devicedata
  }
}

function dispatcherToProps (dispatcher) {
  return bindActionCreators(allactions, dispatcher)
}
export var Main = connect(
  mapStateToProps,
  dispatcherToProps
)(RouterApp)
