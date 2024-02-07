function chunk(arr, size) {
    var newArr = [];
    var newArr2 = [];
    if (size == 1) {
        for (var i = 0; i < arr.length; i++) {
            newArr.push([arr[i]])
        }
        return newArr;
    }
    numberI = Math.floor(arr.length / size);
    console.log(numberI)
    for (var i = 0; i < numberI; i++) { 
        for (var j = 0; j < size; j++) {
            newArr2.push(arr[i*numberI+j])
        }
        newArr.push(newArr2)
        newArr2 = []
    }

    if (arr % size != 0) {
        for (var i = (Math.floor(arr.length / size)*size); i < arr.length; i++) {
            newArr2.push(arr[i]);
        }
        newArr.push(newArr2);
    }
    return newArr;
}
