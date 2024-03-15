function fold(arr, func, value) {
    var list = [];
    var entier = 0
    list.push(value)
    for (var i = 0; i < arr.length; i++) {
        list.push(arr[i])
    }
    for (var j = 1; j < list.length; j++) {
        list[j] = func(list[j-1], list[j])
        entier = list[j]
    }
    return entier;
}

function foldRight(arr, func, value) {
    return fold(arr.reverse(), func, value);
}

// function adder(arr, value = 0) {
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue, value);
// }


// function reduce(arr) {
//     var list = [];
// }


// console.log(fold([3,4,3], ))