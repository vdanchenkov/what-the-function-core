export default (libs) => {
  const result = [];

  for (let libraryName in libs) {
    const library = libs[libraryName];
    for (let functionName in library) {
      const func = library[functionName];
      if (typeof func === 'function') {
        result.push({
          library: libraryName,
          name: functionName,
          func
        });
      }
    }
  }
  return result;
};