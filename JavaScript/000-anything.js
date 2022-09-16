// function AntraMath(n) {
//     this.add = (x) => {
//         n = n+x
//     }
//     this.multiply = (x) => {
//         n = n*x
//     }
//     this.done = () => {
//         return n
//     }
// }

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