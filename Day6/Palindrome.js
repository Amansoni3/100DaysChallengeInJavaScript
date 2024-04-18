// Write a program to determine wheather the given string is a pallindrome or not. A pallindrome is a word, phrase number or other sequence of characters that reads the same forward and backward, ignoring spaces , puntuation, and capitalization.

// Constraints

// The input string may contain letters digits spaces puntuations and special characters. 

// The function should be case-insensitive meaning "Racecar" and "racecar" should be consider the same.

// Ignore spaces puntuation and special character when determing if the string is palindrome.

// The functions should return true if the input string is a pallindrome and false otherwise.



const isPallindrome = (str) => {
    str = str.toLowerCase()
    let reverse_str = str.split("").reverse().join("")
    return str === reverse_str ? true : false
}


console.log(isPallindrome("A man, a plan, a canal, panama"))
console.log(isPallindrome("racecar"))
console.log(isPallindrome("hello"))