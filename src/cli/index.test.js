import { expect } from 'chai'
import wtf from './index'
import lodash from 'lodash'
import ramda from 'ramda'
import { stripIndent } from 'common-tags'

it('able to find lodash and ramda functions', () => {
  expect(
      wtf({ lodash, ramda })([ 1, 2, 3, 4 ], 2).eql([ [ 1, 2 ], [ 3, 4 ] ])
  ).to.eql(stripIndent`
    lodash.chunk(array, 2)
    ramda.splitAt(2, array)
    ramda.splitEvery(2, array)
  ` + '\n')

  expect(
      wtf({ lodash, ramda })({ a: 'x', b: 'y' }, i => i === 'x').eql('a')
  ).to.eql(stripIndent`
    lodash.findKey(object, f)
    lodash.findLastKey(object, f)
  `  + '\n')
})

it('able to show outcomes', () => {
  const add = (a, b) => a + b
  const sub = (a, b) => a - b
  const lib = { add, sub }
  expect(
      wtf({ lib })(2, 2).outcomes()
  ).to.eql(stripIndent`
    0
      lib.sub(2, 2)
      lib.sub(2, 2)
    4
      lib.add(2, 2)
      lib.add(2, 2)
  ` + '\n')
})
