function forEach(arr, func) {
    var list2 = []
    for (var i = 0; i < arr.length; i++) {
        list2.push(func(arr[i]));
    }
    return undefined, list2
}