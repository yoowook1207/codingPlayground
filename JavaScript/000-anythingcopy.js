function boolean(arr1, arr2) {
if(arr1 == arr2) {
    console.log("true 1")
}
if(arr1 != arr2) {
    console.log("false 1")
}
}

boolean([1,2,3], [3,2,1])


function boolean2(arr1) {
    if(arr1 == arr1.reverse()) {
        console.log("true 2 ")
    }
    if(arr1 != arr1.reverse()) {
        console.log("false 2")
    }
    }
    
boolean2([1,2,3])

function 