function indexOf(arr, value, index = 0) {
    for (var i = index; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, value, index = 0) {
    if (index != 0) {
        index = -index
    }
    for (var i = arr.length - index; i >= 0; i--) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}
function includes(arr, value, index) {
    return indexOf(arr, value, index) != -1;
}
