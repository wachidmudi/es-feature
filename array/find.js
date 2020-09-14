const users = require('../data')

// const dataFind = users.find(item => item.city === 'malang')

const teachers = [
  {
    id: 1,
    name: 'Purwanto'
  },
  {
    id: 2,
    name: 'Renhard'
  },
  {
    id: 3,
    name: 'Renhard'
  },
  {
    id: 4,
    name: 'Renhard'
  }
]
// Yang ini buat nyari index
const dataFind = teachers.findIndex(teacher => teacher.id === 3)
// Yang ini buat hapus array
const deleted = teachers.splice(dataFind, 1)

// console.log(teachers)
console.log(deleted)
// console.log(dataFind)























// const dataIndex = users.findIndex(item => item.city === 'malang')

// const deleted = users.splice(dataIndex, 1)

// console.log('users', users)
// console.log('deleted', deleted)
