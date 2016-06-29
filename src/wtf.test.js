import { expect } from 'chai'
import wtf from './wtf'


describe('wtf()', () => {
  it('accepts modules', () => {
    const add = (a, b) => a + b
    const sub = (a, b) => a - b
    const testModule = { add, sub }

    const generator = wtf({ testModule })(2, 4)()

    expect(generator.next()).to.eql({ done: false, value: {
      total: 4,
      current: 1,
      display: 'testModule.add(2, 4)',
      result: 6
    } })

    expect(generator.next()).to.eql({ done: false, value: {
      total: 4,
      current: 2,
      display: 'testModule.add(4, 2)',
      result: 6
    } })

    expect(generator.next()).to.eql({ done: false, value: {
      total: 4,
      current: 3,
      display: 'testModule.sub(2, 4)',
      result: -2
    } })

    expect(generator.next()).to.eql({ done: false, value: {
      total: 4,
      current: 4,
      display: 'testModule.sub(4, 2)',
      result: 2
    } })

    expect(generator.next()).to.eql({ done: true, value: undefined })
  })
})
