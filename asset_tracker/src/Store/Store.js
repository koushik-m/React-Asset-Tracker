import { createStore } from 'redux'
import { rootReducer } from '../Reducers/RootReducer'
export var defData = {
  userdata:
        [{
          name: 'John',
          username: 'John',
          email: 'john@gmail.com',
          password: 'john12',
          role: 'user'
        },
        {
          name: 'Grisham',
          username: 'Grisham',
          email: 'grisham@gmail.com',
          password: 'grisham12',
          role: 'admin'
        },
        {
          name: 'peter',
          username: 'peter',
          email: 'peter@gmail.com',
          password: 'peter12',
          role: 'user'
        }],

  devicedata: [{
    id: 101,
    name: 'Ipad pro',
    brand: 'Apple',
    os: 'Mac',
    img: 'device01.jpg',
    details: 'Latest Ipad from Apple with Mac operating system',
    requested: 'normal0'
  },
  {
    id: 102,
    name: 'Laptop',
    brand: 'Apple',
    os: 'Mac',
    img: 'device02.jpg',
    details: 'Latest Laptop from Apple with Mac operating system',
    requested: 'normal1'
  },
  {
    id: 103,
    name: 'Mobile',
    brand: 'Samsung',
    os: 'Android',
    img: 'device03.jpg',
    details: 'Latest Mobile from Samsung with Android operating system',
    requested: 'normal2'
  },
  {
    id: 104,
    name: 'Laptop',
    brand: 'Dell',
    os: 'Windows',
    img: 'device04.jpg',
    details: 'Latest Laptop from Dell with Windows operating system',
    requested: 'normal3'
  },
  {
    id: 105,
    name: 'Laptop',
    brand: 'Dell',
    os: 'Linux',
    img: 'device05.jpg',
    details: 'Latest Laptop from Dell with Linux operating system',
    requested: 'normal4'
  },
  {
    id: 106,
    name: 'Laptop',
    brand: 'Lenovo',
    os: 'Windows',
    img: 'device06.jpg',
    details: 'Latest Laptop from Lenovo with Windows operating system',
    requested: 'normal5'
  }]
}
export var store = createStore(rootReducer, defData)
