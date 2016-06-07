import { expect } from 'chai';
import findFunction from './findFunction';
import functions from './functions';
import argumentCombinations from './argumentCombinations';

describe('findFunctions()', () => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  it('works', () => {
    const result = findFunction(
        functions({test: {add, sub}}),
        argumentCombinations(2, 4),
        6
    );
    expect(result).to.eql([{
      "args": [2, 4],
      "argsOrder": [0, 1],
      "argsLabels": ['2', '4'],
      "func": add,
      "library": "test",
      "name": "add"
    }, {
      "args": [4, 2],
      "argsOrder": [1, 0],
      "argsLabels": ['4', '2'],
      "func": add,
      "library": "test",
      "name": "add"
    }])
  });
});
