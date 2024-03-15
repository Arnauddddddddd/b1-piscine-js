function forEach(arr, func = undefined) {
    var list2 = []
    for (var i = 0; i < arr.length; i++) {
        if (func != undefined) {
            list2.push(arr[i]);
        }
    }
    return func, list2
}