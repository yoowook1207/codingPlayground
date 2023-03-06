var maximumWealth = function(accounts) {
    let compare = []
    
    for (let i in accounts) {
        compare.push(accounts[i].reduce((a,b)=>a+b))
    }
    return Math.max(...compare)

};

let array1 = [[1,5],[7,3],[3,5]]

console.log(maximumWealth(array1))