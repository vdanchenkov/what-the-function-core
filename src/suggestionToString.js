export default definition => {
  if (definition.display) {
    return definition.display
        .replace(/\$(\d+)\.\.\./g, (_, i) => definition.argsLabels.slice(i).join(', '))
        .replace(/\$(\d+)/g, (_, i) => definition.argsLabels[i])
  } else {
    return `${definition.library}.${definition.name}(${definition.argsLabels.join(', ')})`
  }
}
