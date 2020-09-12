const names = ['agung', 'nasrul', 'aji', 'suryo', 'adly']

// for loop
let output = []
for (let i = 0; i < names.length; i++) {
    output.push(names[i])
}

// console.log(output);

function mapBikinSendiri(array) {

  let output = []

  for (let i = 0; i < array.length; i++) {
      output.push(array[i])
  }

  return output
}


const dataMap = mapBikinSendiri(names)
// console.log(dataMap)



// map with function
const data1 = names.map(function(name) {
  return name
})
// console.log(data1)

// map with arrow
const data2 = names.map(name => `Namaku adalah ${name}`)
console.log(data2)


// Example with class static method
class Karyawan {
  static list() {
    // read file with fs.readFileSync
    // parsedData from JSON.parse()
    return parsedData.map(item => new Staff(item.id, item.name))
  }
}
