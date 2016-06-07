import { permutation } from 'js-combinatorics';
import range from 'lodash/range';

export default (...args) => {
  const permutableArgsNumber = 3;
  return permutation(range(Math.min(permutableArgsNumber, args.length))).toArray().map(perm => {
    const argsOrder = perm.concat(range(permutableArgsNumber, args.length, 1));
    return { argsOrder: argsOrder, args: argsOrder.map(i => args[i]) };
  });
};
