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
    //  at first we have use trim function to remove the spaces from the string from starting and end. if the string after the trim length is zero then it will return false.

    if (str.trim().length === 0) {
        return false
    }

    const words = str.split(" ")

    // now the split function split the string into the array and i have used " " by this string will be break into words. Like [hello , my , name] or if i have only used like this '' then the string will be converted into array of character like [h,e,l,l,o]

    // now we have used sort function to sort the array  but if we use only sort function word.sort() then it will sort the array on the basis of unicode value to avoid this we write a callback function inside a short function and it will arrange the word in large to small way. 

    words.sort((a, b) => b.length - a.length)
    return words[0]
}
const findLongestWordWithReduce = (str) => {
    if (str.trim().length === 0) {
        return false
    }
    const words = str.split(" ")
    // "" basically this is use for intial value.
    return words.reduce((accum, currWord) => (
        currWord.length > accum.length ? currWord : accum), ""
    )
}

console.log(
    findLongestWord("I have started 100 Days of Conding challenge and Its my day 1")
)

console.log(
    findLongestWordWithReduce("jdkjsdcs dsljbncshcn sdcbhsabclhbd hebwbahb jbcdhab du wadbcajncjc cbdsbhc cwebcqbc d")
)