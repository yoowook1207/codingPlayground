var maxSubArray = function(nums) {
    let standard = -Infinity
    let sum = 0
    for (i=0; i<nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i])
        standard = Math.max(sum, standard)
    }
    return standard
};

test = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(test))