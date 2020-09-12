const numbers = [1,2,3,4,5]

const total = numbers.reduce((accumulator, current) => {
    return accumulator * current
}, 0)

console.log('total', total)





















const items = [
	{
		name: 'Watch',
		price: 350000
	},
	{
		name: 'Glasses',
		price: 150000
	},
	{
		name: 'Shoes',
		price: 200000
	}
]


// const itemsReduce = items.reduce((accumulator, current) => {
//   console.log(accumulator);
//   return accumulator + current.price
// }, 0)

// console.log(itemsReduce)








// const itemsReduce = items.reduce((accumulator, current) => {
// 	current.tag = 'quality'

//   	accumulator.push(current)

//   	return accumulator
// }, [])

// console.log(itemsReduce);




// const itemsReduce = items.reduce((accumulator, current) => {
// 	  accumulator[current.name] = current.price
//   	return accumulator
// }, {})

// console.log(itemsReduce);

