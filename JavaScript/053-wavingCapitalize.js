String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0,index) + replacement + this.substring(index + replacement.length);
}

const wavingCap = (str) => {
    const resultArray = [];
    for (let i=0; i<str.length; i ++) {
        let cap = String.fromCharCode(str.charCodeAt(i)-32)
        let temp = str.replaceAt(i, cap)
        resultArray.push(temp)
    }
    return resultArray
}

console.log(wavingCap("wave"))
// String.fromCharCode(strArray[i].charCodeAt(0)-32)