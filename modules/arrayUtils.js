// Problem 1: Chunking an Array

function chunkArray(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunkArray(array1, 2);
console.log('Chunked Array:', chunkedArray); // [[1, 2], [3, 4], [5, 6], [7, 8]]

// Problem 2: Finding Unique Elements

function findUniqueElements(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }
  
const array2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = findUniqueElements(array2);
console.log('Unique Array:', uniqueArray); // [1, 2, 3, 4, 5]
