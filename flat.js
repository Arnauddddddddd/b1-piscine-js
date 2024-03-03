function flat(arr, numb) {
    var arr2 = [];
    if (numb > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arr2 = arr2.slice(i, )
            }
        }
    }
    return arr2;
}

console.log(flat([1,2,3,4], 4))