// LeetCode 169

var majorityElement = function(nums) {
    let elements = {};
    for (let e of nums) {
        if (elements[e]) {
            ++ elements[e]
        } else {
            elements[e] = 1
        }
    }
    return Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b);
};

console.log(majorityElement([2,2,1,1,1,2,2,0,0,0,0,0,0]))