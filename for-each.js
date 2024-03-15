function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        return yield func(arr[i]);
    }
}