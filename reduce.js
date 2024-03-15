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
    var list = [];
    var entier = 0
    list.push(value)
    for (var i = arr.length-1; i >= 0; i--) {
        list.push(arr[i])
    }
    for (var j = 1; j < list.length; j++) {
        list[j] = func(list[j-1], list[j])
        entier = list[j]
    }
    return entier;
}

function reduce(arr, func) {
    var list = [];
    var entier = 0
    for (var i = 0; i < arr.length; i++) {
        list.push(arr[i])
    }
    for (var j = 1; j < list.length; j++) {
        list[j] = func(list[j-1], list[j])
        entier = list[j]
    }
    return entier;
}

function reduceRight(arr, func) {
    var list = [];
    var entier = 0
    for (var i = arr.length-1; i >= 0; i--) {
        list.push(arr[i])
    }
    for (var j = 1; j < list.length; j++) {
        list[j] = func(list[j-1], list[j])
        entier = list[j]
    }
    return entier;
}



// console.log(fold([3,4,3], ))