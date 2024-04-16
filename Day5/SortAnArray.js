// Write a function to sort an array of numbers in ascending orders

// Example usage:

// Console.log(sortAscending([5 , 3 , 10 , 8])) output [3 , 5 , 8 , 10]

// todo requirments
// The function should take an array of numbers as input
// Is should return a new array with number sorted in ascending order
// The orignal array should remain unchanged 
// you are not allowed to use built in sort method 


const sortAscending = (arr) => {
    return arr.sort((a , b) => a - b)
}

console.log(sortAscending([5 , 3 , 10 , 8]))