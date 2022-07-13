var tribonacci = function(n) {
    let triArray = [0,1,1]
    if (n<3) {
        return triArray[n]
    }
    for (let i=2; i<n; i++) {
        triArray.push(triArray[i-2]+triArray[i-1]+triArray[i])
        console.log(triArray)
    }
    return triArray[triArray.length-1]
};

console.log(tribonacci(4))