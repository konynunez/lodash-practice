
import { chunkArray, findUniqueElements } from '/arrayUtils.js';

console.log(chunkArray);
console.log(findUniqueElements);

import { deepCloneObject, mergeObjects } from '/objectUtils.js'

console.log(deepCloneObject);
console.log(mergeObjects);

const { chunkArray, findUniqueElements } = require('./modules/arrayUtils');
const { deepCloneObject, mergeObjects } = require('./modules/objectUtils');