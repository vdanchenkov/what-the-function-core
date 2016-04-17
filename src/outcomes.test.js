import { expect } from 'chai';
import outcomes from './outcomes';
import functions from './functions';
import argumentCombinations from './argumentCombinations';

describe('outcomes()', () => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  it('works', () => {
    const result = outcomes(
        functions({test: {add, sub}}),
        argumentCombinations(2, 4)
    );
    expect(result).to.eql(
        `2
  sub(b, a)
6
  add(a, b)
  add(b, a)
-2
  sub(a, b)
`);
  });
})

