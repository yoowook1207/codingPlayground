// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */


 var romanToInt = function(s) {
    let number = 0

    for (let i=0; i<s.length; i++) {
        if (s[i]=="C") {
            if(s[i+1] =="M") {
                number= number+900
                i=i+2
            }
            else if(s[i+1] =="D") {
                number= number+400
                i=i+2
            }
            else {
                number=number+100
            }
            console.log(number)
        }

        if (s[i]=="X") {
            if(s[i+1] =="C") {
                number= number+90
                i=i+2
            }
            else if(s[i+1] =="L") {
                number= number+40
                i=i+2
            }
            else number = number+10
        }

        if (s[i]=="I") {
            if(s[i+1] =="X") {
                number= number+9
                i=i+2
            }
            else if(s[i+1] =="V") {
                number= number+4
                i=i+2
            }
            else number = number +1
        }

        if(s[i]=="V") number = number +5

        if(s[i]=="L") number = number +50

        if(s[i]=="D") number = number +500

        if(s[i]=="M") number = number +1000

        console.log(i)
        console.log(number)
    }
    return number
};

romanToInt("MCMXCIV")