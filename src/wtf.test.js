import { expect } from 'chai'
import wtf from './wtf'


describe('wtf()', () => {
  it('accepts modules', () => {
    const add = (a, b) => a + b
    const sub = (a, b) => a - b
    const testModule = { add, sub }

    const f = wtf({ testModule })(2, 4)
    
    expect(f.total).eql(4)
    const outcomes = f.outcomes()

    expect(outcomes.next()).to.eql({ done: false, value: {
      current: 1,
      display: 'testModule.add(2, 4)',
      result: 6
    } })

    expect(outcomes.next()).to.eql({ done: false, value: {
      current: 2,
      display: 'testModule.add(4, 2)',
      result: 6
    } })

    expect(outcomes.next()).to.eql({ done: false, value: {
      current: 3,
      display: 'testModule.sub(2, 4)',
      result: -2
    } })

    expect(outcomes.next()).to.eql({ done: false, value: {
      current: 4,
      display: 'testModule.sub(4, 2)',
      result: 2
    } })

    expect(outcomes.next()).to.eql({ done: true, value: undefined })
  })
})
