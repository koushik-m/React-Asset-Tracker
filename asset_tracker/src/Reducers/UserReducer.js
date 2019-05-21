export function users (defStore = { isUserLoggedIn: false, userDetails: {} }, action) {
  switch (action.type) {
    case 'ADD_USER':
      console.log('Within Users Reducer..' + action.type)
      return defStore

    case 'IS_USER_AUTHENTICATED':
      if (action.userDetails.length) { return { isUserLoggedIn: true, userDetails: action.userDetails[0] } }

      return { ...defStore, isUserLoggedIn: false }
    default: return defStore
  }
}
