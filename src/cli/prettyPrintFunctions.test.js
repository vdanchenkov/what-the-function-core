import { expect } from 'chai';
import prettyPrint from './prettyPrintFunctions'

it('uses display parameter', () => {
  const text = prettyPrint([{
    "args": [2, 4],
    "argsLabels": ['2', '4'],
    "display": "$1 + $2",
    "func": (a, b) => a + b ,
    "library": "test",
    "name": "add"
  }])

  expect(text).to.eq(`2 + 4\n`)
})
