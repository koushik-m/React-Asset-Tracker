export function devices (defStore = [], action) {
  switch (action.type) {
    case 'EDIT_DEVICE':
      console.log(action.theId)
      // var theNewList = defStore.filter(v => v.id !== action.theId);
      return defStore

    case 'ADD_NEW_DEVICE':
      var theNewList = [...defStore, action.newdevice]
      console.log(theNewList)
      return theNewList

    default: return defStore
  }
}
