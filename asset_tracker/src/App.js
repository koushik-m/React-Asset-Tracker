/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './Store/Store'
import { Main } from './connect'

function App () {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
