const users = require('../data')


const newData = users.filter(user => user.city === 'malang')


console.log(newData)

// console.log(data)
// console.log(dataByHobbies)








content
.split('\r\n')

.filter((_, i) => i != 0 )

.filter(elem => elem != '')












/*
// Not recommend
const data = users.map((user, i) => {
  if (user.city === 'tangerang') {
    return user + i
  }
})
 */

// const data = users.filter(user => user.city === 'malang')

// const dataByHobbies = users.filter(user => {
//   return user.hobbies.includes('music')
// })
