import isArray from 'lodash/isArray'
import isPlainObject from 'lodash/isPlainObject'
import isFunction from 'lodash/isFunction'

export default (args) => {
  const arrCount = args.filter(isArray).length
  let arrIndex = 1

  const objectCount = args.filter(isPlainObject).length
  let objectIndex = 1

  const functionCount = args.filter(isFunction).length
  let functionIndex = 1

  return args.map(arg => {
    if (typeof arg === 'number') {
      return arg.toString()
    } else if (typeof arg === 'string') {
      return `'${arg}'`
    } else if (isArray(arg)) {
      return arrCount === 1 ? 'array' : `array${arrIndex++}`
    } else if (isPlainObject(arg)) {
      return objectCount === 1 ? 'object' : `object${objectIndex++}`
    } else if (isFunction(arg)) {
      return functionCount === 1 ? 'f' : `f${functionIndex++}`
    } else {
      return arg.toString()
    }
  })
}
