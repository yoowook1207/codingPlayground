// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    var k = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            nums[k++] = nums[i];
        }
    }
    return k;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])