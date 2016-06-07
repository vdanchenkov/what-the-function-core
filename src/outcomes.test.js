import { expect } from 'chai';
import outcomes from './outcomes';
import functions from './functions';
import argumentCombinations from './argumentCombinations';

describe('outcomes()', () => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  it('works', () => {
    const result = outcomes(
        functions({test: {add, sub}}),
        argumentCombinations(2, 4)
    );
    expect(result).to.eql({
      '2': [
        {
          args: [4, 2],
          argsOrder: [1, 0],
          argsLabels: ["4", "2"],
          func: sub,
          library: "test",
          name: "sub"
        }
      ],
      '6': [
        {
          args: [2, 4],
          argsOrder: [0, 1],
          argsLabels: ["2", "4"],
          func: add,
          library: "test",
          name: "add"
        }, {
          args: [4, 2],
          argsOrder: [1, 0],
          argsLabels: ["4", "2"],
          func: add,
          library: "test",
          name: "add"
        }
      ],
      '-2': [
        {
          args: [2, 4],
          argsOrder: [0, 1],
          argsLabels: ["2", "4"],
          func: sub,
          library: "test",
          name: "sub"
        }
      ]
    });
  });
});
