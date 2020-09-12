const users = require('../data')

const data = users.filter(user => user.city === 'malang')

// content.split('\r\n').filter((_, i) => i != 0 ).filter(elem => elem != '')

/*
// Not recommend
const data = users.map((user, i) => {
  if (user.city === 'tangerang') {
    return user + i
  }
})
 */

console.log(data);
