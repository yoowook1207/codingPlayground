var titleToNumber = function (columnTitle) {
  let num = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    num +=
      (columnTitle.charCodeAt(i) - 64) *
      Math.pow(26, columnTitle.length - (i + 1));
  }
  return num;
};

console.log(titleToNumber("FXSHRXW"));
