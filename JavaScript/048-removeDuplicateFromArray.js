function removeDuplicates(arr) {
  arr.map(x => {
    if (arr.indexOf(x) != arr.lastIndexOf(x)) {
      arr.splice(arr.indexOf(x), 1);
    }
  });
  return arr;
}

let given = ["mike", "matt", "nancy", "adam", "nancy", "jenny", "matt"];

console.log("First method: ");
console.log(removeDuplicates(given));

function removeDuplicates2(duplicatedArray) {
  let resMap = {};
  for (let name of duplicatedArray) {
    if (!resMap[name]) {
      resMap[name] = 1;
      // if name is already exist in the result object , simply do nothing. If it does not exist in the result object, put it in the object
    }
  }
  let noDuplicateArr = Object.keys(resMap);
  return noDuplicateArr;
}

console.log("Second method: ");
console.log(removeDuplicates2(given));
