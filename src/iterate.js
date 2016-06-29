export default function *(functionList, argumentList, options = {}) {
  const total = functionList.length * argumentList.length
  let current = 0

  for (const f of functionList) {
    for (const a of argumentList) {
      current++
      if (options.start && current <= options.start) continue
      let result
      let display
      try {
        result = f.func(...a.args)
        display = f.display(a.argsLabels)
      } catch (e) {
        // ignored
      }
      yield { total, current, result, display }
    }
  }
}
