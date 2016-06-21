import argumentCombinations from './argumentCombinations';
import { expect } from 'chai';

describe('argumentCombinations()', () => {
  it('returns array of argument combination definitions', () => {
    const result = argumentCombinations('a', 'b', 'c');
    expect(result.length).to.be.eq(6);
    expect(result).to.include({ args: ['a', 'c', 'b'], argsLabels: ["'a'", "'c'", "'b'"] });
    expect(result).to.include({ args: ['c', 'a', 'b'], argsLabels: ["'c'", "'a'", "'b'"] });
  });

  it('skips permutations for arguments after 4th', () => {
    const result = argumentCombinations('a', 'b', 'c', 'd');
    expect(result.length).to.be.eq(6);
    expect(result).to.include({ args: ['a', 'c', 'b', 'd'], argsLabels: ["'a'", "'c'", "'b'", "'d'"] });
    expect(result).to.include({ args: ['c', 'a', 'b', 'd'], argsLabels: ["'c'", "'a'", "'b'", "'d'"] });
  })
})