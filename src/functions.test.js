import { expect } from 'chai';
import functions from './functions.js';

describe('buildFunctions()', () => {
  it('returns array of function descriptors', () => {
    const a = new Function();
    const b = new Function();
    const result = functions({ libname: { a, b }});
    expect(result).to.be.eql([
      { library: 'libname', name: 'a', func: a},
      { library: 'libname', name: 'b', func: b},
    ]);
  });
});
