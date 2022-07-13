var hammingWeight = function(n) {
    let count =0
    let binary= n.toString(2)
    for(let i of binary) {
        if(i==='1'){
            count++;
        }
    }
    return count
};

console.log(hammingWeight(11111111111111111111111111111101))