var moveZeroes = function(nums) {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// var moveZeroes = function(nums) {
//     let zeroIndexes =[]
//     for (i=0; i<nums.length; i++) {
//         if (i===0) {
//             zeroIndexes.push(i)
//         }
//     }
//     for (i=0; i<)
// };

let array1 = [0,1,0]

console.log(moveZeroes(array1))