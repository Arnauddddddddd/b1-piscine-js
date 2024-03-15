function fold(arr, func, value) {
    var list = [];
    // var entier = 0;
    list.push(value)
    for (var i = 0; i < arr.length; i++) {
        list.push(arr[i])
    }
    return func(list.slice(1), list[0]);
}

// function adder(arr, value = 0) {
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue, value);
// }


// function reduce(arr) {
//     var list = [];
// }


// console.log(fold([3,4,3], ))