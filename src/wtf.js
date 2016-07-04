import argumentCombinations from './argumentCombinations'
import functionsFromModules from './functionsFromModules'
import flatMap from 'lodash/flatMap'
import iterate from './iterate'
import isArray from 'lodash/isArray'

export default (...functions) => (...args) => {
  const functionList = flatMap(functions, arg => {
    if (isArray(arg)) {
      return arg
    } else {
      return functionsFromModules(arg)
    }
  })
  const argsList = argumentCombinations(args)

  const total = functionList.length * argsList.length
  const result = options => ({
    total,
    [ Symbol.iterator ]: () => iterate(functionList, argsList, options)
  })

  result.total = total
  result[ Symbol.iterator ] = () => iterate(functionList, argsList)

  return result
}
