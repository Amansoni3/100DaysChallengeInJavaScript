// write a function findMax that takes an array of numbers as input and returns maximum number in array

const findMax = (arr) => {
    return Math.max(...arr)
}

console.log(findMax([1,4,3,9,2]))
console.log(findMax([-10,-5,-4,-2,-1,-20]))
console.log(findMax([5]))