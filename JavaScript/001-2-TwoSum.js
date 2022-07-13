let twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++){
		// work out the complement
		// eg. nums[i] === 3, target === 7, the complement will be 4
        let value = target - nums[i];
		
		// Iterate the rest of the number and check if the complement of nums[i] exists
		// This part takes a lot of time
        let found = nums.indexOf(value, i+1);

        if(found !== -1){
            return true
        }
    }
    return false
};

console.log(twoSum([3,2,4], 7))