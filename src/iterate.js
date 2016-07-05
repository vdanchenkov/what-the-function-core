import cloneDeep from 'lodash/cloneDeep'

export default function *(functionList, argumentList, options = {}) {
  let current = 0

  for (const f of functionList) {
    for (const a of argumentList) {
      current++
      if (options.skip && current <= options.skip) continue
      let result
      let display
      try {
        display = f.display(...a.argsLabels)
        result = f.func(...cloneDeep(a.args))
      } catch (e) {
        // ignored
      }
      yield { current, result, display }
    }
  }
}
