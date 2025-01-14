// 12: Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

// Example usage:

// console. log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4]

// The new Set() method in JavaScript creates a new Set object. A Set object | is a collection of unique values. It can store any type of value, whether | primitive values or object references. | Constraints

// Constraints:

// The input-array-may-cahtain both positive and negative integers.

// The input array may be empty.

// The elements in the input array are not guaranteed to be sorted.

// The output array should retain the original order of elements from the input array.


const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr
}

console.log(removeDuplicates([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]))





