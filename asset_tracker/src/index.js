/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './view/Login/index'
import Devices from './view/Devices/index'
// import Card from './components/Card/index'
// import Navbar from './components/Navbar/index'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Login />, document.getElementById('root'))

// ReactDOM.render(<Card headerprop="Hey there" os="Android" imgsrc="ipad.jpg" company="Apple" typeofuser="user"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
