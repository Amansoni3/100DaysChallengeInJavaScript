//? 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

const findMin = (arr) => {
    arr.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    return arr[0]; // return the first element after sorting (which is the minimum)
}

const findMinMath = (arr) => {
    return Math.min(...arr)
}

console.log(findMinMath([1,2,3,4,5]))

console.log(findMin([5, 10, 2, 8])); // Output: 2
