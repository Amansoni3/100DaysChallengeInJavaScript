// Write a function to convert the string in the camelCase and snake_case


const camelCase = (str) => {
    str = str.trim().split(" ")
    str = str.map((currEle , index) => {
        if(index === 0){
            return currEle.toLowerCase()
        }
        else{
            return currEle.charAt(0).toUpperCase() + currEle.slice(1).toLowerCase()
        }
    })
    return str.join("")
}

console.log(camelCase("Hello my name is aman soni"))