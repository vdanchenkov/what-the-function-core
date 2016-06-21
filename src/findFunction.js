import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'

const invoke = ({ func, args }) => func(...cloneDeep(args));

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
  }
  return results;
};
