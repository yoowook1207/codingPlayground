// const arr = [1,0,-7,-7,-3,11,8,8]

// arr.sort((a,b) => a-b)

// console.log(arr)

// if you want to sort alphabets in order of certain sequence, use indexOf to get the index from sequence and sort.

const wordArray = ["tea", "eat", "ate", "rrew", "werr", "hi"];

function solution(arr) {
  obj = {};

  let result = [];

  let tempArr = arr.map(x => [...x].sort().join(""));

  for (let i = 0; i < tempArr.length; i++) {
    if (obj[tempArr[i]]) {
      obj[tempArr[i]].push(arr[i]);
    } else {
      obj[tempArr[i]] = [arr[i]];
    }
  }

  for (let arrays in obj) {s
    result.push(obj[arrays]);
  }

  return result;
}

console.log(solution(wordArray));

// prints:
// [
//     ['tea', 'eat', 'ate'],
//     ['rrew', 'werr'],
//     ['hi']
// ]
