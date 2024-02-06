function indexOf(arr, value, index = 0) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, value, index) {
    return indexOf(arr.reverse(), value);
}
function includes(arr, value, index) {
    return indexOf(arr, value) != -1;
}