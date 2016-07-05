import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'

export default function *(functionList, argumentList, options = {}) {
  let current = 0

  for (const f of functionList) {
    for (const a of argumentList) {
      current++
      if (options.skip && current <= options.skip) continue
      let result
      let display
      let modified
      try {
        display = f.display(...a.argsLabels)
        const clonedArgs = cloneDeep(a.args)
        result = f.func(...clonedArgs)
        modified = !isEqual(a.args, clonedArgs)
      } catch (e) {
        // ignored
      }
      yield { current, result, display, modified }
    }
  }
}
