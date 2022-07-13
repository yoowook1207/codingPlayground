var nearestValidPoint = function(x, y, points) {
    let Inf = Infinity
    let answer = -1
    for (i=0; i<points.length; i++) {
        if (x===points[i][0] || y===points[i][1]) {
            let far = Math.abs(x-points[i][0] + y-points[i][1])
            if (far < Inf) {
                Inf = far;
                answer = i
            }
        }
    }
    return answer
};

array = [[1,2],[3,1],[2,4],[2,3],[4,4]]

console.log(nearestValidPoint(3,4, array))