function filter(arr, func) {
    var list = [] 
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            list.push(arr[i])
        }
    }
    return list
}