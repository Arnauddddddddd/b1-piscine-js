function slice(arr, index, end = -1) {
    if (end == -1) {
        end = arr.length;
    }
    if (index < 0) {
        index = arr.length + index;
    }
    if (index < end) {
        return arr[index] + slice(arr, index+1, end);
    }
    return "";
}

console.log(slice('abcdef', 0, 2))
console.log(slice('abcdef', 2))