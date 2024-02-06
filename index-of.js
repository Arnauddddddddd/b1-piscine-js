function indexOf(arr, value, index = 0) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, value, index) {
    return indexOf(arr.reverse(), value, index);
}
function includes(arr, value, index) {
    return indexOf(arr, value, index) != -1;
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
