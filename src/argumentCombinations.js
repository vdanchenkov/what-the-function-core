import { permutation } from 'js-combinatorics';
import range from 'lodash/range';
import argumentLabels from './argumentLabels';

export default (...args) => {
  const permutableArgsNumber = 3;
  return permutation(range(Math.min(permutableArgsNumber, args.length))).toArray().map(perm => {
    const argsOrder = perm.concat(range(permutableArgsNumber, args.length, 1));
    const argsValues = argsOrder.map(i => args[i]);
    return { argsOrder: argsOrder, args: argsValues, argsLabels: argumentLabels(argsValues) };
  });
};
