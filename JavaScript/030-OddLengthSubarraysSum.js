// var sumOddLengthSubarrays = function(arr) {
//     let sum = 0
//     let len = arr.length
//     for (i=0; i<len; i++) {
//         let total = i * (len-1) + (len-1)
//         sum += Math.ceil(total / 2) * arr[i];
//     }
//     return sum;

// };

var sumOddLengthSubarrays = function(arr) {
    
    let count=0;
    
    for(let i=0;i<arr.length;i++){ // helping in selecting the starting point
        
        for(let j=i;j<arr.length;j++){  // helping in selecting the endpoint point
		
            if((i-j)%2==0){  // so that it only count the subarrays which have odd length
			
				for(let k=i;k<=j;k++){ // looping from start point to end point and adding them
					count+=arr[k];
				}
            }
        }
    }
    return count;
};

let array1 = [1,4,2,5,3]

console.log(sumOddLengthSubarrays(array1))