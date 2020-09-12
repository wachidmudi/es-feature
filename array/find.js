const users = require('../data')

const dataFind = users.find(item => item.city === 'malang')
const dataIndex = users.findIndex(item => item.city === 'malang')

const deleted = users.splice(dataIndex, 1)

console.log('users', users)
console.log('deleted', deleted)
