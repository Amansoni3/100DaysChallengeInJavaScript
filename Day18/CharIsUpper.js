// Write a function to check if a character is upper case or lower case

const isUpperCase = (char) => {
    let value = false
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        value = true
    }
    return value
}

console.log(isUpperCase("a"))
console.log(isUpperCase("B"))