// You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

// If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

// Otherwise, the function should return the generated hash tag prefixed with #.

// Write a function generateHash to accomplish this task.


const generateHash = (str) => {
    if (str.length > 280 || str.trim() === 0) {
        return false
    }

   let string = str.split(" ")

    string = string.map((currVal) =>
        currVal.charAt(0).toUpperCase() + currVal.slice(1)
        // currVal.replace(currVal[0], currVal[0].toUpperCase())
    )
    string = string.join("")
    string = `#${string}`
    return string
}


console.log(generateHash("This is a hashtag Generator Code"))