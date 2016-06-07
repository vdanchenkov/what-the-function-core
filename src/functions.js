export default (libs) => {
  const result = [];

  for (let libraryName in libs) {
    const library = libs[libraryName];
    Object.getOwnPropertyNames(library).forEach(functionName => {
      const func = library[functionName];
      if (typeof func === 'function') {
        result.push({
          library: libraryName,
          name: functionName,
          func
        });
      }
    })
  }
  return result;
};