// String.prototype.replaceAt = function(index, replacement) {
//     return this.substring(0,index) + replacement + this.substring(index + replacement.length);
// }

function capitalize (str) {
    const strArray = str.split(' ');

    for (let i =0; i<strArray.length; i++) {
        // strArray[i] = strArray[i].replaceAt(0, String.fromCharCode(strArray[i].charCodeAt(0)-32))
        strArray[i] = String.fromCharCode(strArray[i].charCodeAt(0)-32) + strArray[i].substring(1)
    }
    return strArray.join(' ')
}

// 32
console.log(capitalize('cvs health'))
