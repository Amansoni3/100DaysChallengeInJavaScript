// Write a function that takes a number as input and returns the sum of its digits.

// Example usage:

// console. log(sum0fDigits(1234)); // Output: 10
// console. log(sum0fDigits(4321)); // Output: 10
// console. log(sum0fDigits(123456)); // Output: 21

// Constraints: |
// The input number will always be a positive integer. |
// The input number can have multiple digits. |
// The output should be the sum of all the digits in the input number.

const sumOfDigit = (num) => {
    let arr = Array.from(String(num) , Number)
    return arr.reduce((acc , currValue) => acc + currValue , 0)
}

console.log(sumOfDigit(15))