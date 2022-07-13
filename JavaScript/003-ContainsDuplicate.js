var containsDuplicate = function(nums) {
    let newArray = []
    for (i=0; i<nums.length; i++) {
        let x = nums[i]
        // console.log(x)
        if (x in newArray) {
            return true
        }
        newArray[x] = true
        console.log(newArray)
    }
    return false
};

array1=[1,2,3,1]
array2=[1,2,3,4]

console.log(containsDuplicate(array1))