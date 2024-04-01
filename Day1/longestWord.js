// Longest word in a string

// Q : Write a function findLongestWord that takes a string as input and return the longest word of the string. If there are multiple longest words , return the first one encounterd.

// Constaraints

// 1) The input string may contain alphabetic character digit spaces and puntuactions.
// 2) The input string is non empty.
// 3) The input string may contain multiple words seprated by spaces.

// Note:

// 1) If the input string is empty or contain only whitespaces the function should return as false.
// 2) The function should ignore the leading and trailing white spaces when determing the longest word.

const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false
    }
    const words = str.split(" ")
    words.sort((a,b) => b.length - a.length)
    return words[0]
}
const findLongestWordWithReduce = (str) => {
    if(str.trim().length === 0){
        return false
    }
    const words = str.split(" ")
    return words.reduce((accum , currWord) => (
       currWord.length > accum.length ? currWord : accum),"" 
    )
}

console.log(
    findLongestWord("I have started 100 Days of Conding challenge and Its my day 1")
)

console.log(
    findLongestWordWithReduce("jdkjsdcs dsljbncshcn sdcbhsabclhbd hebwbahb jbcdhab du wadbcajncjc cbdsbhc cwebcqbc d")
)