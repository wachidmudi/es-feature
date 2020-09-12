const users = [
  {
    "name": "agung",
    "city": "sampit",
    "hobbies": [
      "movies",
      "music"
    ]
  },
  {
    "name": "nasrul",
    "city": "tangerang",
    "hobbies": [
      "game",
      "music",
      "trip"
    ]
  },
  {
    "name": "aji",
    "city": "malang",
    "hobbies": [
      "music",
      "food"
    ]
  },
  {
    "name": "suryo",
    "city": "yogyakarta",
    "hobbies": [
      "game",
      "teach"
    ]
  },
  {
    "name": "adly",
    "city": "malang",
    "hobbies": [
      "food",
      "trip"
    ]
  }
]

const vocal = 'aiueo'
const test1 = 'aaiieieeoo'.split('')

const data = users.some(user => user.city === 'malang')

console.log(data)
console.log(test1.every(item => vocal.includes(item)))
