var search = function(nums, target) {
    for (i=0; i<nums.length; i++) {
        if (target === nums[i]) {
            let compare = []
            compare.push(i)
            return i
        } 
    }
    if (compare = []) {
        return "-1"
    }
};

let array1 = [-1,0,3,5,9,12]
let array2 = [-1,0,3,5,3,12]
console.log(search(array2,9))
