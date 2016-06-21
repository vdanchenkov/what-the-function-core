import map from 'lodash/map'

const prettyPrintDefinition = definition => {
  return `  ${definition.name}(${definition.argsLabels.join(', ')})`
}

const prettyPrint = (outcomes) => {
  return map(outcomes, (v, k) => `${k}\n${v.map(prettyPrintDefinition).join('\n')}`).join('\n') + '\n'
}

export default prettyPrint
