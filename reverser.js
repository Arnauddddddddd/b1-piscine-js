function reverse(arr) {
    var newArr = [];
    var str = "";
    for (var i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i])
        str += arr[i];
    }
    if (Array.isArray(arr)) {
        return newArr;
    }
    return str;
}

console.log(reverse('pouet'))