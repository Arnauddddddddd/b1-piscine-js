function slice(arr, index, end = null) {
    if (end == null) {
        end = arr.length;
    }
    if (end < 0) {
        end = arr.length + end;
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
console.log(slice('abcdef', 0, -2))