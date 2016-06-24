import printSuggestion from './../suggestionToString'

export default (outcomes) => 
  Object.entries(outcomes)
    .map(([ result, suggestions ]) => `${result}\n${suggestions.map(def => '  ' + printSuggestion(def)).join('\n')}`)
    .join('\n') + '\n'
