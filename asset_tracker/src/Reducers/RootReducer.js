import { combineReducers } from 'redux'
import { users } from './UserReducer'
import { devices } from './DeviceReducer'

export var rootReducer = combineReducers({
  users, devices
})
