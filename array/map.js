const names = ['agung', 'nasrul', 'aji', 'suryo', 'adly']

// for loop
let output = []
for (let i = 0; i < names.length; i++) {
    output.push(names[i])
}

const newData = names.map((name, index) => {
  return `${index} ${name}`
})

console.log(newData)




















function mapBikinSendiri(array) {

  let output = []

  for (let i = 0; i < array.length; i++) {
      output.push(`Namaku adalah ${array[i]}`)
  }

  return output
}
// console.log(mapBikinSendiri(names))










const dataMap = mapBikinSendiri(names)
// console.log(dataMap)





// fs.readFile('./data.json', 'utf8', (err, data) => {
//   data = JSON.parse(data)

//   return data.map(teacher => new Teacher(teacher.id, teacher.name))
// })















// map with function
const data = names.map(function(name) {
  return `Namaku adalah ${name}`
})
// console.log(data1)











// map with arrow
const data2 = names.map(name => `Namaku adalah ${name}`)
// console.log(data2)


// Example with class static method
class Karyawan {
  static list() {
    // read file with fs.readFileSync
    // parsedData from JSON.parse()
    return parsedData.map(item => new Staff(item.id, item.name))
  }
}
