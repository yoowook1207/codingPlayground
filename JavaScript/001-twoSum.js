let Array1 = []

let twoSum = function(nums, target) {
    for (let i =0; i<nums.length; i++) {

        let value = target-nums[i]
        let value2 = nums.find(()=> target-nums[i])

        if (value+value2 === target) {
            return [Array1.indexOf(value), Array1.indexOf(value2)].sort()
        }
    }

};   



console.log(twoSum([2,7,11,15], 9))
