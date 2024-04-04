// Count occurencees of the character
// Task

// write a function called countCharacter that takes two parameters : a string and a character to count. The function should return the number of times the specified character appears in the string.

// console.log("aman",a) output 2

// todo constraints

// The functions should be case-sensitive.
// The function should handle both uppercase and lowercase characters.
// The character parameter can be any printable ASCII Character sets and is printable.

const countChar = (str , word) => {
    word = word.toLowerCase()
    str = str.toLowerCase()

    totalCount = str.split("").reduce((acc , currVal) => {
        if (currVal === word){
            acc++
        }
        return acc
    }, 0)

    return totalCount
}

console.log(countChar("AmanAman" , "a"))
