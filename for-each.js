function forEach(arr, func) {
    for (var i = func; i < arr.length; i++) {
        func(arr[i]);
    }
}