import isEqual from 'lodash/isEqual'

export default (result, iterable) => {
  const lines = []

  for (const outcome of iterable) {
    if (isEqual(outcome.result, result)) {
      lines.push(outcome.display)
    }
  }
  return lines.join('\n')
}
