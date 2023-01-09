// const temp = {
//     A: '',
//     B: Number,
//     C: '',
// }

// const obj = Object.create(temp);
// obj.A = "hello"
// obj.B = 7
// obj.C = "Sung"

// console.log(obj)

// ------------------------

// const sumNum = (n) => {
//     return (n2) => {
//         return n + n2
//     }
// }

// console.log(sumNum(2)(4))

// ------------------------

class AntraMath {
    constructor(n) {
        this.add = (x) => {
            n = n+x
        }
        this.multiply = (x) => {
            n = n*x
        }
        this.done = () => {
            return n
        }
    }
}

let myMath = new AntraMath(10)
myMath.add(5)
myMath.multiply(2)
let res = myMath.done()
console.log(res)

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

sum.getSomeValue = function () {
    return sum.__sumValue__
}

console.log('TESTING ' + result.getSomeValue())
console.log(sum)