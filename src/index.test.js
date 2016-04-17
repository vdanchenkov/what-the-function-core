import { expect } from 'chai';
import { findFunction, functions,  argumentCombinations } from './index';
import lodash from './sources/lodash';
import ramda from './sources/ramda';

it('able to find lodash and ramda functions', () => {
  expect(findFunction(
      functions({ lodash, ramda }),
      argumentCombinations([1, 2, 3, 4], 2),
      [[1, 2], [3, 4]]
  )).to.eql(['lodash.chunk(a, b)', 'ramda.splitAt(b, a)', 'ramda.splitEvery(b, a)', ''].join('\n'));

  expect(findFunction(
      functions({ lodash, ramda }),
      argumentCombinations({a: 'x', b: 'y'}, i => i === 'x'),
      'a'
  )).to.eql(['lodash.findKey(a, b)', 'lodash.findLastKey(a, b)', ''].join('\n'));
});
