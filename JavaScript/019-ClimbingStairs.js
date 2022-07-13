// same as fibonacci numbers but n=2 is 2

var climbStairs = function(n) {
    if (n<=0) {
        return 0
    } else if (n===1) {
        return 1
    } else if (n===2) {
        return 2
    }

    let x =3
    let y =1
    let z =2
    while(x<=n) {
        let sum = y+z
        y=z
        z=sum
        x++
    }
    return z
};
