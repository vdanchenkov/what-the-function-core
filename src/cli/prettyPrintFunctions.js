import map from 'lodash/map'

const prettyPrintDefinition = definition => {
  if (definition.display) {
    return definition.display.replace(/(\$)(\d+)/g, (match, p1, p2) => definition.argsLabels[p2 - 1])
  } else {
    return `${definition.library}.${definition.name}(${definition.argsLabels.join(', ')})`
  }
}

const prettyPrint = (results) => {
  return map(results, prettyPrintDefinition).join('\n') + '\n'
}

export default prettyPrint
