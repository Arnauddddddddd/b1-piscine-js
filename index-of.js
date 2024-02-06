function indexOf(arr, value, index = 0) {
    for (var i = index; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, value, index = 0) {
    var resultat = -1;
    for (var i = 0; i < arr.length - index; i++) {
        if (arr[i] == value) {
            resultat = i;
        }
    }
    return resultat;
}


function includes(arr, value, index) {
    return indexOf(arr, value, index) != -1;
}


