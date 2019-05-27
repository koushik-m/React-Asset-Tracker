export var userdata = [
  {
    name: 'John Doe',
    username: 'john',
    email: 'john@gmail.com',
    password: 'john12',
    role: 'user',
    requestedDevice: [104, 105, 106],
    currentDevice: [104]
  },
  {
    name: 'Grisham Tucker',
    username: 'grisham',
    email: 'grisham@gmail.com',
    password: 'grisham12',
    role: 'admin',
    requested: []
  },
  {
    name: 'Peter Mathew',
    username: 'peter',
    email: 'peter@gmail.com',
    password: 'peter12',
    role: 'user',
    requestedDevice: [101, 102, 103],
    currentDevice: [104]
  }
]

var devicedata = [
  {
    id: 101,
    name: 'Ipad pro',
    brand: 'Apple',
    os: 'Mac',
    img: 'device01.jpg',
    details: 'Latest Ipad from Apple with Mac operating system',
    requested: 'normal0',
    allocated: ''
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
  }
]

export default devicedata
