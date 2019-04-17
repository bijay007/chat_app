// Finds the depth of an object containing repeatable array of the same name

const getObjectDepth = (originalObj, arrPropName) => {
  let length = 0;
  let recursiveCheck = obj => {
    for (let key in obj) {
      while (Array.isArray(obj[key]) && key === arrPropName) {
        length += 1;
        return recursiveCheck(Object.assign({}, ...obj[key]))
      }
    }
    return length;
  }
  let result = recursiveCheck(originalObj);
  return result;
}

export default getObjectDepth;
