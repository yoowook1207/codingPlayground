function sum(num) {
    if(sum.__sumValue__ === undefined) {
        sum.__sumValue__ = 0
    } else if (num === undefined) {
        num = 0
    }
    sum.__sumValue__ += num;
    return sum;
}

const result = sum(5)(6)(7)(8)()


sum.valueOf=function() {
    return this.__numValue__;
}

sum.getSomeValue = function () {
    return sum.__sumValue__
}

console.log(+result+1)