import { map, cloneDeep, isEqual } from 'lodash';

const invoke = ({ func, args }) => func(...cloneDeep(args));

const prettyPrintDefinition = definition => {
  return `${definition.library}.${definition.name}(${definition.argsOrder.map(i => String.fromCharCode(97 + i)).join(', ')})`;
};

const prettyPrintResults = (results) => {
  return map(results, prettyPrintDefinition).join('\n') + '\n';
};

export default (functions, argumentCombinations, result) => {
  const results = [];
  for (const f of functions) {
    for (const a of argumentCombinations) {
      const def = {...a, ...f};
      try {
        if (isEqual(invoke(def), result)) {
          results.push(def);
        }
      } catch (e) {

      }
    }
  };
  return prettyPrintResults(results);
};
