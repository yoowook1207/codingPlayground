var countOdds = function(low, high) {

    if (high-low===1){
        return 1
    } else if ((high-low+1)%2 === 0) {
        return (high-low+1)/2
    } else {
        if(low%2===0 && high%2===0) {
            return (high-low)/2
        } else {
            return (high-low+2)/2
        }
    }
};

console.log(countOdds(3,9))