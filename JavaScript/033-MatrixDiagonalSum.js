var diagonalSum = function(mat) {
    let priDiaNums =[]
    let secDiaNums =[]
    let subtract = 0
    for (let i in mat) {
        priDiaNums.push(mat[i][i])
        console.log(priDiaNums)
    }

    for (let i in mat) {
        let index = Math.abs(i-mat.length+1)
        secDiaNums.push(mat[i][index])
        console.log(secDiaNums)
    }

    if (mat.length%2===1) {
        let x = Math.ceil(mat.length/2)-1
        subtract = mat[x][x]
        console.log(subtract)
    }

    if (mat.length ===1){
        return mat[1][1]
    }
    return priDiaNums.reduce((a,b)=>a+b) + secDiaNums.reduce((a,b)=>a+b) - subtract

};

array1 = [[1,2,3],
[4,5,6],
[7,8,9]]

console.log(diagonalSum(array1))