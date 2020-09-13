const fs = require('fs')
const path = require('path')

const pathData = path.resolve(__dirname, 'data.json')

const data = fs.readFileSync(pathData, 'utf8')
const users = JSON.parse(data)

module.exports = users
