function solution(inputString) {
    let counts = {}
    let odd=0
    let stringArr = inputString.split("").map(x=> x.charCodeAt())
    stringArr.forEach(x=>{counts[x] = (counts[x]||0)+1})

    console.log(Object.values(counts))
    Object.values(counts).map(x=>{
        if(x%2==1) {
            odd++
        }
    })
    if(odd>1){
        return false
    }
    return true
}

solution("aacccbbeeeggg")