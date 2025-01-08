// Challenge: Calculate the Average :

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:

// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average. 

const calculateAvg = (arr) => {
   let total = arr.reduce((acc , currValue) => acc + currValue , 0)
    return total / arr.length
}

console.log(calculateAvg([1,2,3,4,5,6]))