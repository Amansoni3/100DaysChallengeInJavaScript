// Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14

const sumOfSqaure = (arr) => {
    return arr.reduce((acc , currEle) => acc = acc + (currEle*currEle),0)
}

const sumofSqaureFor = (arr) => {
    let sum = 0
    for(let ele of arr){
        sum = sum + ele*ele
    }
    return sum
}

console.log(sumOfSqaure([1,2,3]))