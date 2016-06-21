import { expect } from 'chai'
import argumentLabels from './argumentLabels'

describe('argumentLabels()', () => {
  it('uses values for numbers', () => {
    expect(argumentLabels([ 1, 2, 3 ])).to.eql([ '1', '2', '3' ])
  })

  it('uses values for strings', () => {
    expect(argumentLabels([ 'a', 'b' ])).to.eql([ "'a'", "'b'" ])
  })

  it('uses arr label for single array', () => {
    expect(argumentLabels([ [ 1, 2, 3 ] ])).to.eql([ 'array' ])
  })

  it('uses arr(n) label for multiple arrays', () => {
    expect(argumentLabels([ [ 1, 2, 3 ], [ 4 ] ])).to.eql([ 'array1', 'array2' ])
  })

  it('uses f label for single function', () => {
    expect(argumentLabels([ () => ({}) ])).to.eql([ 'f' ])
  })

  it('uses f(n) label for multiple functions', () => {
    expect(argumentLabels([ () => ({}), () => ({}) ])).to.eql([ 'f1', 'f2' ])
  })

})
