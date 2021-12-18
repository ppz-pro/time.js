const target = require('../clone')

const now = new Date()
console.log(now.getTime() == target(now).getTime())
console.log(now != target(now))