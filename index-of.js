function indexOf(arr, value, index = 0) {
    for (var i = index; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, value, index = 0) {
    return indexOf(arr.reverse(), value, arr.length-1 - index);
}


function includes(arr, value, index) {
    return indexOf(arr, value, index) != -1;
}

