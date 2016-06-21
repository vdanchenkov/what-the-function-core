import map from 'lodash/map';

const prettyPrintDefinition = definition => {
  return `${definition.library}.${definition.name}(${definition.argsLabels.join(', ')})`;
};

const prettyPrint = (results) => {
  return map(results, prettyPrintDefinition).join('\n') + '\n';
};

export default prettyPrint;
