const fib = function(num) {
    if (num<=0) {
        return 0
    }
    if (num===1) {
        return 1
    }

    let x =2
    let y =0
    let z =1
    while(x<=num) {
        let sum = y+z
        y=z
        z=sum
        x++
    }
    return z
};

console.log('fib original = ' + fib(10))

const fibonacci = num => {
    if (num<=0) {
        return 0
    }
    if (num===1) {
        return 1
    }

    const arr = [0,1];
    for (let i=2; i<= num; i++) {
        const m = arr[i-1] + arr[i-2];
        arr.push(m);
    }
    return arr[num]
}

console.log('fib new = ' + fibonacci(10))

const fibRecursive = (num) => {
    if (num<=0) {
        return 0
    }
    if (num===1) {
        return 1
    }
    return fibRecursive(num-1) + fibRecursive(num-2);
}

console.log('fib recursive = ' + fibRecursive(10))