function fold(arr, func, value) {
    var list = [];
    list.push(value)
    for (var i = 0; i < arr.length; i++) {
        list.push(arr[i])
    }
    for (var i = 0; i < arr.length; i++) {
        func(arr[i])
    }
}

function reduce(arr) {
    var list = [];
}