var average = function(salary) {
    let maxSalary = Math.max.apply(null, salary)
    let minSalary = Math.min.apply(null, salary)

    newArray =[]
    for (i=0; i<salary.length; i++) {
        if(salary[i]!==maxSalary && salary[i]!==minSalary) {
            newArray.push(salary[i])
        }
    }
    let sum = newArray.reduce((a,b)=> a+b, 0)
    return sum/newArray.length
    
};

array1 = [4000,3000,1000,2000]

console.log(average(array1))