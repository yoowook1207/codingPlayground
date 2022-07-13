var matrixReshape = function(mat, r, c) {
    const flat = mat.flat()
    if (flat.length !== r*c) return mat;
    return [...Array(r)].map(() => flat.splice(0,c)) 
};

let array1 = [[1,2],[3,4]]

console.log(matrixReshape(array1, 1, 4))