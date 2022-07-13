var merge = function(nums1, m, nums2, n) {
    if (m===0) {
        nums1.splice(0,nums1.length)
    }
    if (n===0) {
        nums2=[]
        nums2.splice(0,nums2.length)
    }
    nums1.splice(m,nums1.length-1)
    nums2.splice(n,nums2.length-1)
    nums1.splice(0,0, ...nums2)
    nums1.sort((a,b)=>{return a-b});
    console.log(nums1)
};

let array1 = [1,2,3,0,0,0], x = 3, array2 = [2,5,6], y = 3

merge(array1, x, array2, y)