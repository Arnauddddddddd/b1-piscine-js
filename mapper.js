function map(arr, func = null) {
    var list = [] 
    for (var i = 0; i < arr.length; i++) {
        list.push(func(arr[i], i, arr))
    }
    return list
}

function flatMap(arr, func = null) {
    var list = [] 
    for (var i = 0; i < arr.length; i++) {
        list.push(func(arr[i]))
    }
    return list
}