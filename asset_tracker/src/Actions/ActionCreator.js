/* eslint-disable no-undef */
import { defData } from '../Store/Store'
export function AddNewDevice (newdevice) {
  return { type: 'ADD_NEW_DEVICE', newdevice }
}

export function EditDevice (theId) {
  return { type: 'EDIT_Device', theId }
}

export function AddUser () {
  return { type: 'ADD_USER' }
}

export function AuthenticateUser (user) {
  // console.log(defData)
  const userDetails = defData.userdata.filter(
    (p, i) => p.username === user.username && p.password === user.password
  )
  console.log('inside Authenticate user')
  console.log(userDetails)
  localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]))
  return { type: 'IS_USER_AUTHENTICATED', userDetails }
}

export function Logout () {
  return { type: 'LOGOUT' }
}
