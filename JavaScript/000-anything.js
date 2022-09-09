function minStart(arr) {
    // Write your code here
    let startingNum = 1
    if (arr[0]<0) {
        startingNum += Math.abs(arr[0])
    }
    let tempNumber = startingNum
    let tempArr = []

    for (let i=0; i<arr.length; i++) {
        tempNumber += arr[i]
        tempArr.push(tempNumber)
    }
    
    let MinNum = Math.min(...tempArr)
    console.log(startingNum)
    console.log(MinNum)
    let needAdd = 1-MinNum
    console.log(needAdd)
    return tempNumber+needAdd

}

minStart([-5,4,-2,3,1,-1,-6,-1,0,5])