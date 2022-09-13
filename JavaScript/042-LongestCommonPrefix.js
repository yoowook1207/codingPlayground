// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length ==0 ) return ""

    let wordLength = strs.map(x => x.length)
    let shortest = Math.min(...wordLength)

    let prefix = ""
    for (let i=0; i<shortest; i++) {
        let char = strs[0][i];

        if(strs.every(letter => letter[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","floght"]))
