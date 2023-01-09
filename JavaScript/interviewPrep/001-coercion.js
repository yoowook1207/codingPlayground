const obj = {value: 5};

obj.valueOf = function() {
    return this.value;
}


console.log(obj)