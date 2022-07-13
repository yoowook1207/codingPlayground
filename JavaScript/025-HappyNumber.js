var isHappy = function(n) {
    let set = new Set()
    let x = n
    while (x !== 1) {
        let digits = [...x.toString()];
        let sqrDigits = digits.map((x)=>Math.pow(x,2));
        x = sqrDigits.reduce((a,b)=>(a+b),0)
        if (set.has(x)) return false
        set.add(x)
        console.log(set)
    }
    return true
};

console.log(isHappy(20))
