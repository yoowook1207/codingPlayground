const nextGreater = (n) => {
    let result = -1;

    let temp = [];

    let numArray = n.toString().split('');

    let length = numArray.length;

    const swapTheNumber = (index) => {
        for(let i=0; i<temp.length; i++){
            if(temp[i]>numArray[index]){
                let tempNum = temp[i];
                temp[i]= numArray[index];
                numArray[index] = tempNum;
                break
            }
        }
    }

    for (let j =length-1; j>=0; j--) {
        if(temp.length && numArray[j]<temp[temp.length-1]) {
            swapTheNumber(j);
            result = [...numArray.slice(0, j+1), ...temp].join('')
            break;
        }
        temp.push(numArray[j])
    }
    return Number(result)
}

console.log(nextGreater(56731421))
