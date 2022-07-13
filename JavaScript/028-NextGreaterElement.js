var nextGreaterElement = function(nums1, nums2) {
    let answer = []

    for (i=0; i<nums1.length; i++) {
        let x =nums2.indexOf(nums1[i])
        let tempNums2 = nums2.slice(x, nums2.length)

        for (j=0; j<tempNums2.length; j++) {
            if (Math.max(...tempNums2)===nums1[i]) {
                answer.push(-1)
                break
            } else if (nums1[i]<tempNums2[j]) {
                answer.push(tempNums2[j])
                break
            }
        }

    }
    return answer
};

let array1 = [4,1,2], array2 = [1,3,4,2]

console.log(nextGreaterElement(array1, array2))