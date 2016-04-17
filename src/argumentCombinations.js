import { permutation } from 'js-combinatorics';
import { range } from 'lodash';

export default (...args) => {
  return permutation(range(args.length)).toArray().map(perm => {
    return { argsOrder: perm, args: perm.map(i => args[i]) };
  });
};