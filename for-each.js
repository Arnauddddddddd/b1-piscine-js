function forEach(arr, index) {
    var list2 = []
    for (var i = index; i < arr.length; i++) {
        list2.push(arr[i])
    }
    return list2;
}