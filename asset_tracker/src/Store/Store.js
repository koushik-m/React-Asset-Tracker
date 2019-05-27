import { createStore } from 'redux'
import { rootReducer } from '../Reducers/RootReducer'
import devicedata, { userdata } from '../Data/index'

export var defData = {
  userdata: userdata,

  devicedata: devicedata
}
export var store = createStore(rootReducer, defData)
