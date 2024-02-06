function slice(arr, index, end = -1) {
    if (end == -1) {
        end = arr.length-1;
    }
    if (index <= end) {
        return arr[index] + slice(arr, index+1, end);
    }
    return "";
}

console.log(slice('abcdef', 2))