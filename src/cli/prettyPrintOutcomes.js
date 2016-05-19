import { map } from 'lodash';

const prettyPrintDefinition = definition => {
  return `  ${definition.name}(${definition.argsOrder.map(i => String.fromCharCode(97 + i)).join(', ')})`;
};

const prettyPrint = (outcomes) => {
  return map(outcomes, (v, k) => `${k}\n${v.map(prettyPrintDefinition).join('\n')}`).join('\n') + '\n';
};

export default prettyPrint;
