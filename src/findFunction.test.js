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
    expect(result).to.eql(
`test.add(a, b)
test.add(b, a)
`);
  });
})

