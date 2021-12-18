const clone = require('./clone')

function increment(date, type, incr) {
  const get = 'get' + type
  const set = 'set' + type
  const result = clone(date)
  result[set](result[get]() + incr)
  return result
}

increment.year = function(date, incr) {
  return increment(date, 'FullYear', incr)
}
increment.month = function(date, incr) {
  return increment(date, 'Month', incr)
}
increment.date = function(date, incr) {
  return increment(date, 'Date', incr)
}
increment.hour = function(date, incr) {
  return increment(date, 'Hours', incr)
}
increment.minute = function(date, incr) {
  return increment(date, 'Minutes', incr)
}
increment.second = function(date, incr) {
  return increment(date, 'Seconds', incr)
}

module.exports = increment