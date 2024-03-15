function flat(arr, n = 1) {
    if (n == 0) return arr
    var a = [];
    var noArr = true;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            noArr = false;
            for (let j = 0; j < arr[i].length; j++) {
                a.push(arr[i][j])
            }

        } else {
            a.push(arr[i])
        }
    }

    if (noArr) return a
    return flat(a, n-1)
}