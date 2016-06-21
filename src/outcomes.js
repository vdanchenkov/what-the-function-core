import map from 'lodash/map'
import cloneDeep from 'lodash/cloneDeep'

const invoke = ({ func, args }) => func(...cloneDeep(args));

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
  }
  return groupByResult;
};
