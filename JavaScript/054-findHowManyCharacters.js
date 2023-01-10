const charCounter = (char, str) => {
    let counter = 0;
    str = str.split(' ');
    for (let i=0; i<str.length; i++) {
        if([...str[i]].includes(char)) {
            counter ++
        }
    };
    return counter
}

const charCounter2 = (char, str) => {
    let counter =0;
    str.split('').forEach((letter)=> {
        if( char === letter) {
            counter ++
        }
    });
    return counter
}

console.log(charCounter('h', 'how many times does the character occur in this sentence?'))
console.log(charCounter2('h', 'how many times does the character occur in this sentence?'))