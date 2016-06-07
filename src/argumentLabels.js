import countBy from 'lodash/countBy';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';

export default (args) => {
  const arrCount = args.filter(isArray).length
  let arrIndex = 1

  const objectCount = args.filter(isPlainObject).length
  let objectIndex = 1


  return args.map(arg => {
    if (typeof arg === 'number') {
      return arg.toString()
    } else if (typeof arg === 'string') {
      return `'${arg}'`
    } else if (isArray(arg)) {
      return arrCount === 1 ? 'array' : `array${arrIndex++}`
    } else if (isPlainObject(arg)) {
      return objectCount === 1 ? 'object' : `object${objectIndex++}`
    } else {
      return arg.toString()
    }
  });
};