function chunk(arr, size) {
    new newArr = [];
    new newArr2 = [];
    numberI = arr.length / size;
    for (var i = 0; i < number; i++) {
        newArr2 = []
        for (var j = 0; j < size; j++) {
            newArr2.push(arr[i+j])
        }
        newArr.push(newArr2)
    }
    if (arr % size != 0) {
        newArr.push([arr.slide(arr.length - (arr % size))])
    }
    return newArr;
}