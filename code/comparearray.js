// JavaScript Program to Compare Elements of Two Arrays

// This compares string representations.
// Works well for flat arrays with same order.
// Not suitable for unordered or nested arrays.

// function compareArrays(arr1, arr2) {
//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// }


function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(compareArrays([1, 2, 3], [1, 2, 3])); // true
console.log(compareArrays([1, 2, 3], [1, 2, 4])); // false



// JavaScript Program to Merge Two Arrays and Remove Duplicate Items

function getUniqueAfterMerge(arr1, arr2) {
  let merged = arr1.concat(arr2);
  let uniqueArr = [];

  for (let i = 0; i < merged.length; i++) {
    if (!uniqueArr.includes(merged[i])) {
      uniqueArr.push(merged[i]);
    }
  }

  console.log(uniqueArr);
}

