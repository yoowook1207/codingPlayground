var letterToCharCode = function(s) {
    let string = [];

    for (let i=0; i<s.length; i++) {
    
        let code = s.charCodeAt(i)
        console.log(s[i])
        console.log(code)


    if (((code >= 48) && (code <= 57))  // numbers
        || ((code >= 65) && (code <= 90))  // uppercase
        || ((code >= 97) && (code <= 122)))
         {
            string.push(s[i]);
        }
    }

    console.log(string)
};

let a = 'Hi, My Name Is Sung!!!'

letterToCharCode(a)

