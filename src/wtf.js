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
  return {
    total,
    outcomes(options) { return iterate(functionList, argsList, options)}
  }
}
