var searchInsert = function(nums, target) {
    for (i=0; i<nums.length; i++) {
        if (target===nums[i]) {
            return i
        } else if (nums[i]<target && target<nums[i+1]) {
            let answer = i+1
            return answer
        } else if (nums[nums.length-1]<target) {
            return nums.length
        } else if  (nums[0]>target) {
            return 0
        }


    }

};

array1 = [1,3,5,6]

console.log(searchInsert(array1, 7))