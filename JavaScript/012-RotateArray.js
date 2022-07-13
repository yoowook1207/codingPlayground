// var rotate = function(nums, k) {
//     let n=1
//     while (n<=k) {
//         x = nums[nums.length-1]
//         nums.unshift(x)
//         nums.pop()
//         n++
//     }
//     return nums
// };

var rotate = function(nums, k) {
    array1 = nums.slice(0,nums.length-1-k )
    nums.splice(0,0, ...array1)
};

array = [1,2,3,4,5,6,7], n = 3

console.log(rotate(array, n))