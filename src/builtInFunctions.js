import functions from './functionsFromModules'

const arithmetics = [ '+', '-', '/', '*' ].map(operator => ({
  display: (a, b) => [ a, operator, b ].join(' '),
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
        display: (obj, ...rest) => `${obj}.${key}(${rest.join(', ')})`
      }
    } else {
      return {
        func: (...args) => {
          if (args[0].constructor === constructor) {
            return args[0][key]
          }
        },
        display: (obj) => `${obj}.${key}`
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
