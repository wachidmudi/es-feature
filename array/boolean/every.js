const vocal = 'aiueo'

const input = 'aaiieieeoo'.split('')

const checkVocal = input.every(item => vocal.includes(item))

console.log(checkVocal)
