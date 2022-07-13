// Peak index of mountain array is always largest number of the array.

var peakIndexInMountainArray = function(arr) {
    let x = Math.max(...arr)
    return arr.indexOf(x)
};

array1 = [0,10,5,2]

console.log(peakIndexInMountainArray(array1))