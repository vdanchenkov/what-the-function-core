import argumentCombinations from './argumentCombinations';
import { expect } from 'chai';

describe('argumentCombinations()', () => {
  it('returns array of argument combination definitions', () => {
    const result = argumentCombinations('a', 'b', 'c');
    expect(result.length).to.be.eq(6);
    expect(result).to.include({ args: ['a', 'c', 'b'], argsOrder: [0, 2, 1] });
    expect(result).to.include({ args: ['c', 'a', 'b'], argsOrder: [2, 0, 1] });
  });
})