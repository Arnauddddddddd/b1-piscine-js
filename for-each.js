function forEach(arr, func = null) {
    var list2 = []
    for (var i = 0; i < arr.length; i++) {
        if (func != null) {
            list2.push(arr[i]);
        }
    }
    return [undefined], list2
}