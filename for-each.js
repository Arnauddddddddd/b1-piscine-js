function forEach(arr, func = 0) {
    var list2 = []
    for (var i = func; i < arr.length; i++) {
        list2.push(arr[i])
    }
    return list2
}