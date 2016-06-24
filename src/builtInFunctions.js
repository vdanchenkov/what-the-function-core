import functions from './functions'

const arithmetics = [ '+', '-', '/', '*' ].map(operator => ({
  display: `$0 ${operator} $1`,
  func: new Function('a', 'b', `return a ${operator} b`)
}))

const instanceMethodsAndProperties = (constructor) => {
  const prototype = constructor.prototype
  return Object.getOwnPropertyNames(prototype).map(key => {
    if (typeof prototype[key] == 'function') {
      return {
        func: (...args) => {
          if (args[0].constructor === constructor) {
            return prototype[key].call(...args)
          }
        },
        display: `$0.${key}($1...)`
      }
    } else {
      return {
        func: (...args) => {
          if (args[0].constructor === constructor) {
            return args[0][key]
          }
        },
        display: `$0.${key}`
      }
    }
  })
}

export default [
  ...arithmetics,
  ...instanceMethodsAndProperties(Array),
  ...instanceMethodsAndProperties(String),
  ...instanceMethodsAndProperties(Date),
  ...instanceMethodsAndProperties(RegExp),
  ...functions({ Object, Array, String, Date, RegExp })
]
