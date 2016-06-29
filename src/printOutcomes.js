export default (iterable) => {
  const groups = []

  for (const outcome of iterable) {
    const key = JSON.stringify(outcome.result)
    groups[key] = groups[key] || []
    groups[key].push(outcome.display)
  }
  return Object.entries(groups)
           .map(([ key, lines ]) => `${key}\n${lines.map(display => '  ' + display).join('\n')}`)
           .join('\n')
}
