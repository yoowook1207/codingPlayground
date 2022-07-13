var sortedSquares = function(nums) {
    let squaredArray = nums.map((x) => {return Math.pow(x,2)})
    squaredArray.sort((a,b)=>{return a-b});
    console.log(squaredArray)
};

let array1 = [-4,-1,0,3,10]

sortedSquares(array1)