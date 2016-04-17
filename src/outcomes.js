import { map, cloneDeep } from 'lodash';

const invoke = ({ func, args }) => func(...cloneDeep(args));

const prettyPrintDefinition = definition => {
  return `  ${definition.name}(${definition.argsOrder.map(i => String.fromCharCode(97 + i)).join(', ')})`;
};

const prettyPrintOutcomes = (outcomes) => {
  return map(outcomes, (v, k) => `${k}\n${v.map(prettyPrintDefinition).join('\n')}`).join('\n') + '\n';
};

export default (functions, argumentCombinations) => {
  const groupByResult = {};
  for (const f of functions) {
    for (const a of argumentCombinations) {
      const def = {...a, ...f};
      try {
        const result = invoke(def);
        if (!(result instanceof Error || result instanceof Function || result === undefined)) {
          const key = JSON.stringify(result);
          if (groupByResult[key]) {
            groupByResult[key].push(def);
          } else {
            groupByResult[key] = [def];
          }
        }
      } catch (e) {

      }
    }
  };
  return prettyPrintOutcomes(groupByResult);
};
