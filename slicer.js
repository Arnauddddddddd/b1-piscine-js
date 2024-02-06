function slice(arr, index, end = null) {
    if (end == null) {
        end = arr.length;
    }
    if (index <= end) {
        return arr[index] + slice(arr, index+1, end);
    }
}