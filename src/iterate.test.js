import { expect } from 'chai'
import iterate from './iterate'


describe('iterate()', () => {
  it('works with empty lists', () => {
    const generator = iterate([], [])
    expect(generator.next()).to.eql({ done: true, value: undefined })
  })

  it('works with lists', () => {
    const inc = x => x + 1
    const dec = x => x - 1
    const generator = iterate([
      {
        func: inc,
        display: (n) => `${n} + 1`
      }, {
        func: dec,
        display: (n) => `${n} - 1`
      }
    ], [
      {
        args: [ 1 ],
        argsLabels: [ '1' ]
      }, {
        args: [ 6 ],
        argsLabels: [ '6' ]
      }
    ])
    expect(generator.next()).to.eql({ done: false, value: { current:1, total: 4, result: 2, display: '1 + 1' } })
    expect(generator.next()).to.eql({ done: false, value: { current:2, total: 4, result: 7, display: '6 + 1' } })
    expect(generator.next()).to.eql({ done: false, value: { current:3, total: 4, result: 0, display: '1 - 1' } })
    expect(generator.next()).to.eql({ done: false, value: { current:4, total: 4, result: 5, display: '6 - 1' } })
    expect(generator.next()).to.eql({ done: true, value: undefined })
  })
})