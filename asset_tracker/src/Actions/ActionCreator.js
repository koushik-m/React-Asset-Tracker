import { defData } from '../Store/Store'
import { localStorage } from 'react'
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
  // console.log(user)
  const userDetails = defData.filter((p, i) =>
    p.username === user.username && p.password === user.password
  )
  localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]))
  return { type: 'IS_USER_AUTHENTICATED', userDetails }
}
