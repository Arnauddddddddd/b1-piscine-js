function indexOf(arr, value, index = 0) {
    for (var i = index; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, value, index = 0) {
    if (indexOf(arr.reverse().slice(0, arr.length-1 -index), value) == -1) {
        return -1;
    }
    return arr.length-1 - indexOf(arr.reverse().slice(0, arr.length-1 -index), value);
}


function includes(arr, value, index) {
    return indexOf(arr, value, index) != -1;
}


console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
console.log(lastIndexOf([0, 0, 2, 2], 2, 3))


