var fib = function(n) {
    if (n<=0) {
        return 0
    } else if (n===1) {
        return 1
    }

    let x =2
    let y =0
    let z =1
    while(x<=n) {
        let sum = y+z
        y=z
        z=sum
        x++
    }
    return z
};

console.log(fib(4))