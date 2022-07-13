// Check if String1 is reverse of String2

// 48-57 numbers
// 65-90 uppercases
// 97-122 lower

let checkPalindrome = function (String1, String2) {

    let String2Array = String2.split("")
    String2Array.reverse()
    let reversedString2 = String2Array.join("")
    console.log(reversedString2)

    if (String1=String2) {
        return true
    }
    else return false
};

console.log(checkPalindrome("12345 6789", "9876 54321"))