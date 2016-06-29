import { expect } from 'chai'
import functionsFromModules from './functionsFromModules.js'

describe('functionsFromModules()', () => {
  it('returns array of function descriptors', () => {
    const a = new Function()
    const b = new Function()
    const result = functionsFromModules({ libname: { a, b } })
    expect(result).to.be.an.array
    expect(result[0].func).to.be.eql(a)
    expect(result[0].display(1)).to.be.eql('libname.a(1)')
    expect(result[1].func).to.be.eql(b)
    expect(result[1].display(1)).to.be.eql('libname.b(1)')
  })
})
