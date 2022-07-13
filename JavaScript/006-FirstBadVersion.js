var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let FV = 1
        let CV = n
        while (FV<CV) {
            let x = Math.floor((CV+FV)/2)
            if (isBadVersion(x)) {
                CV = x
            } else {
                FV = x+1
            }
        }
        return FV
    };
};