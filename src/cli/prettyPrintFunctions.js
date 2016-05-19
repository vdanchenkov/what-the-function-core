import { map } from 'lodash';

const prettyPrintDefinition = definition => {
  return `${definition.library}.${definition.name}(${definition.argsOrder.map(i => String.fromCharCode(97 + i)).join(', ')})`;
};

const prettyPrint = (results) => {
  return map(results, prettyPrintDefinition).join('\n') + '\n';
};

export default prettyPrint;
