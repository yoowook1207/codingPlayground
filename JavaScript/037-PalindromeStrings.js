var isPalindrome = function(s) {
    if (s.length===1 || s==="") {
    return true
}

let string = '';

for (let i=0; i<s.length; i++) {

    let letter = s.charCodeAt(i)
    if(((letter >= 48) && (letter <= 57))  // numbers
    || ((letter >= 65) && (letter <= 90))  // uppercase
    || ((letter >= 97) && (letter <= 122)))
     {
        string += s[i];
    }
}

let lowerString = string.toLowerCase()

let strArray = lowerString.split("")
let orgString = strArray.join("")

let reversedArray = strArray.slice().reverse()
let reversedString = reversedArray.join("")

console.log(reversedString)

if (orgString === reversedString) {
    return true
} else {
    return false
}
};

let e = '1 A man, a plan, a canal: panama 1 -'

console.log(isPalindrome(e))