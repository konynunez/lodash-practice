const _ = require('lodash');

// Problem 3: Deep Cloning an Object
function deepCloneObject(obj) {
    const clonedObj = JSON.parse(JSON.stringify(obj));
    console.log('Deep Cloned Object:', clonedObj);
    return _.clonedObj;
  }
  const object1 = { a: 1, b: { c: 2 } };
  const deepClonedObject1 = deepCloneObject(object1);
  
  // Problem 4: Merging Objects
  function mergeObjects(obj1, obj2) {
    const mergedObj = {...obj1, ...obj2};
    console.log('Merged Object:', mergedObj);
    return _.mergedObj;
  }
  const object2 = { b: 3, c: 4 };
  const mergedObject = mergeObjects(object1, object2);

  module.exports  = { deepCloneObject, mergeObjects };