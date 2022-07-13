let signFunc = (x) => {
    if(x<0) {
        return -1
    } else if (x>0) {
        return 1
    } else if (x===0) {
        return 0
    }
}

var arraySign = function(nums) {
    let x=0
    for (i=0; i<nums.length; i++) {
        if(nums[i]<0) {
            x++
        } else if (nums[i]===0) {
            return 0
        }
    }
    if (x%2===1) {
        return -1
    }
    else {return 1}
};