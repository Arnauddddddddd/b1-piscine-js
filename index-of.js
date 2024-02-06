function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, value) {
    return indexOf(arr.reverse(), value);
}
function includes(arr, value) {
    return indexOf(arr, value) != -1;
}