// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) {
    let each = s.split("")
    let reversed = []

    for (let i=0; i<each.length; i++) {
        if(each[i]=="(") {
            reversed.push(")")
        }
        else if(each[i]=="{") {
            reversed.push("}")
        }
        else if(each[i]=="[") {
            reversed.push("]")
        } else {
            if(each[i] !=reversed.pop()) {
                return false
            }
        }
    }

    return reversed.length === 0;

    // let tempArr = []

    // for (let i = 0 ; i < s.length ; i++) {
    //     let c = s.charAt(i);
    //     switch(c) {
    //         case '(': tempArr.push(')');
    //             break;
    //         case '[': tempArr.push(']');
    //             break;
    //         case '{': tempArr.push('}');
    //             break;
    //         default:
    //             if (c !== tempArr.pop()) {
    //                 return false;
    //             }
    //     }
    // }
    
    // return tempArr.length === 0;
};

console.log(isValid("{[]}"))