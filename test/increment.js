const target = require('../increment')

const now = new Date()
console.log('一', now)
console.log('年', target.year(now, 1))
console.log('月', target.month(now, 1))
console.log('日', target.date(now, 1))
console.log('时', target.hour(now, 1))
console.log('分', target.minute(now, 1))
console.log('秒', target.second(now, 1))