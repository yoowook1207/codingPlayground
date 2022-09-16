// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

    let number = digits.join('')
    number = BigInt(number) +1n
    let split = Array.from(String(number), Number)
    
    console.log(split)
};

plusOne([9])