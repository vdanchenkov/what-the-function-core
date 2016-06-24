import { expect } from 'chai'
import prettyPrint from './prettyPrintFunctions'

it('uses display parameter with placeholders', () => {
  const text = prettyPrint([ {
    'args': [ 2, 4 ],
    'argsLabels': [ '2', '4' ],
    'display': '$0 + $1',
    'func': (a, b) => a + b ,
    'library': 'test',
    'name': 'add'
  } ])

  expect(text).to.eq(`2 + 4\n`)
})


it('uses display parameter with rest placeholders', () => {
  const text = prettyPrint([ {
    'args': [ 1, 2, 3, 4 ],
    'argsLabels': [ '1', '2', '3', '4' ],
    'display': 'sum($0)($1...)'
  } ])

  expect(text).to.eq(`sum(1)(2, 3, 4)\n`)
})
