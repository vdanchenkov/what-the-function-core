import { expect } from 'chai'
import { stripIndent } from 'common-tags'
import printEql from './printEql'

describe('printEql()', () => {
  const evaluations = [
    { total: 4,
      current: 1,
      result: 3,
      display: '1 + 2'
    }, {
      total: 4,
      current: 2,
      result: 3,
      display: '2 + 1'
    }, {
      total: 4,
      current: 3,
      result: -1,
      display: '1 - 2'
    }, {
      total: 4,
      current: 4,
      result: 1,
      display: '2 - 1'
    }
  ]

  it('works', () => {
    expect(printEql(3, evaluations)).to.be.eql(stripIndent`
      1 + 2
      2 + 1
    `)
  })
})
