export function AddNewDevice (newdevice) {
  return { type: 'ADD_NEW_DEVICE', newdevice }
}

export function EditDevice (theId) {
  return { type: 'EDIT_Device', theId }
}

export function AddUser () {
  return { type: 'ADD_USER' }
}
