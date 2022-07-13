var areAlmostEqual = function(s1, s2) {
    let tempArr = []
    for(let i=0; i<s1.length; i++) {
        if (s1[i] !== s2[i]) {
            tempArr.push(i)
        }
    }
    if (tempArr.length === 0) {
        return true
    } else if (tempArr.length ===2 && s1[tempArr[0]] === s2[tempArr[1]] && s1[tempArr[1]] === s2[tempArr[0]]) {
        return true
    } else {
        return false
    }
};