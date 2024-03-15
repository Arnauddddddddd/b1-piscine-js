function fold(arr, func, value) {
    var list = [];
    list.push(value)
    for (i = 0; i < arr.length; i++) {
        list.push(arr[i])
    }
    for (i = 0; i < arr.length; i++) {
        func(arr[i])
    }
}

function reduce(arr) {
    var list = [];
}