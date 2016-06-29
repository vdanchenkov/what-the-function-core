import { expect } from 'chai'
import { stripIndent } from 'common-tags'
import printOutcomes from './printOutcomes'

describe('printOutcomes()', () => {
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
    expect(printOutcomes(evaluations)).to.be.eql(stripIndent`
      1
        2 - 1
      3
        1 + 2
        2 + 1
      -1
        1 - 2
    `)
  })
})
