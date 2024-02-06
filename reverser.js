function reverse(arr) {
    var newArr = [];
    for (var i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    if (Array.isArray(arr)) {
        return newArr;
    }
    return newArr.split("");
}