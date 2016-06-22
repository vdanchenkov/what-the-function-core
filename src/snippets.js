const arithmetics = [ '+', '-', '/', '*' ].map(operator => ({
  display: `$1 ${operator} $2`,
  func: new Function('a', 'b', `return a ${operator} b`)
}))

const arrayInstanceMethods = []
Object.getOwnPropertyNames(Array.prototype).forEach(key => {
  if (typeof Array.prototype[key] == 'function') {
    arrayInstanceMethods.push({
      func: (a1) => Array.prototype[key].call(a1),
      display: `$1.${key}`
    })
  }
})

export default [ ...arithmetics, ...arrayInstanceMethods ]
