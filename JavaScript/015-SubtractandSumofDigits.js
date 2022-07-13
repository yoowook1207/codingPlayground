var subtractProductAndSum = function(n) {
    let newArray = Array.from(String(n))
    let numberArray = newArray.map(i=> Number(i))
    let product = numberArray.reduce((a,b) => a*b)
    let sum = numberArray.reduce((a,b) => a+b)
    let number = product-sum
    return number
};

console.log(subtractProductAndSum(234))