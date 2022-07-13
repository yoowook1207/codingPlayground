var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>(a-b))
    let one = 1
    if(arr.length ===2) {
        return true
    }
    for (i=0; i<=arr.length-3; i++) {
        let x = arr[i]-arr[i+1]
        let y = arr[i+1]-arr[i+2]
        if (x===y) {
            one= one*1
        } else if (x!==y) {
           one = one*0
        }
    }
    if (one===0) {
        return false
    } else if (one>0) {
        return true
    }
};

let Array1 = [1,2,4]

console.log(canMakeArithmeticProgression(Array1))