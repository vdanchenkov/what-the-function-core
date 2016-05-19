import { expect } from 'chai';
import wtf from './index';
import lodash from 'lodash';
import ramda from 'ramda';
import { stripIndent } from 'common-tags'

it('able to find lodash and ramda functions', () => {
  expect(
      wtf({ lodash, ramda })([1, 2, 3, 4], 2).eql([[1, 2], [3, 4]])
  ).to.eql(stripIndent`
    lodash.chunk(a, b)
    ramda.splitAt(b, a)
    ramda.splitEvery(b, a)
  ` + '\n');

  expect(
      wtf({ lodash, ramda })({a: 'x', b: 'y'}, i => i === 'x').eql('a')
  ).to.eql(stripIndent`
    lodash.findKey(a, b)
    lodash.findLastKey(a, b)
  `  + '\n');
});

it('able to show outcomes', () => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const lib = { add, sub };
  expect(
      wtf({ lib })(2, 2).outcomes()
  ).to.eql(stripIndent`
    0
      sub(a, b)
      sub(b, a)
    4
      add(a, b)
      add(b, a)
  ` + '\n');
});