

var guessNumber = function(n) {
    let guess = (num) => {
        if (num === n) {
            return 0
        } else if (num < n) {
            return 1
        } else if (num > n) {
            return -1
        }
    }
    
    let x = 1, y = n
    while (x<=y) {
        let average = Math.floor((x+y)/2)
        if(!guess(average)) return average
        if(guess(average) < 0){
            y = average-1
        } else x = average+1
    }
    return x
};