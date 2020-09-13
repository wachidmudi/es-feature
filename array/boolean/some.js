const users = require('../../data')

const data = users.some(user => user.city === 'malang')

console.log(data)
