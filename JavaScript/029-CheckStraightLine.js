// var checkStraightLine = function(coordinates) {
//     let firstHypo = Math.sqrt( Math.pow(coordinates[1][0]-coordinates[0][0],2) +  Math.pow(coordinates[1][1]-coordinates[0][1],2))

//     for (i=0; i<coordinates.length-1; i++) {
//         hypo = Math.sqrt( Math.pow(coordinates[(i+1)][0]-coordinates[i][0],2) + Math.pow(coordinates[(i+1)][1]-coordinates[i][1],2) )
//         if(firstHypo !==hypo) {
//             return false
//         }
//         if(coordinates[i+1][0]+coordinates[i][0] === 0 || coordinates[i+1][1]+coordinates[i][1] ===0) {
//             return false
//         }
//     }
//     return true
// };

var checkStraightLine = (coordinates) => {
    if (coordinates.length == 2) return true;
    for (let i = 0; i < coordinates.length - 2; ++i)
      if (
        (coordinates[i + 2][1] - coordinates[i + 1][1]) * (coordinates[i + 1][0] - coordinates[i][0]) !=
        (coordinates[i + 1][1] - coordinates[i][1]) * (coordinates[i + 2][0] - coordinates[i + 1][0])
      )
        return false;
    return true;
  };

let corArray = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

console.log(checkStraightLine(corArray))