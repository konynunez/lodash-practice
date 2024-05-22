
// Problem 3: Deep Cloning an Object

function deepCloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  const deepClonedObject = deepCloneObject(object1);
  console.log('Deep Cloned Object:', deepClonedObject); // { a: 1, b: { c: 2 } }


// Problem 4: Merging Objects
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
  }
  const object2 = { b: 3, c: 4 };
  const mergedObject = mergeObjects(object1, object2);
  console.log('Merged Object:', mergedObject); // { a: 1, b: 3, c: 4}