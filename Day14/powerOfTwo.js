const isPowerOfTwo = (num) => {
    let op = false
    for (let i = 1; i < num; i++) {
        if (2 ** i === num) {
            op = true
        }
    }
    return op
}

console.log(isPowerOfTwo(8))