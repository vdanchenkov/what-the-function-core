import functions from '../functions'
import argumentCombinations from '../argumentCombinations'
import findFunctions from '../findFunction'
import prettyPrintFunctions from './prettyPrintFunctions'
import outcomes from '../outcomes'
import prettyPrintOutcomes from './prettyPrintOutcomes'

export default (libs) => (...args) => {
  const functionDescriptors = functions(libs)
  const argDescriptors = argumentCombinations(...args)
  return {
    eql: (result) => prettyPrintFunctions(findFunctions(functionDescriptors, argDescriptors, result)),
    outcomes: () => prettyPrintOutcomes(outcomes(functionDescriptors, argDescriptors))
  }
}
