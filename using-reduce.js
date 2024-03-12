function adder(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function sumOrMul(arr, value = 0) {
    var result = arr.reduce((accumulator, currentValue) => {
        if (currentValue % 2 == 0 ) return accumulator * currentValue;
        if (currentValue % 2 == 1 ) return accumulator + currentValue;
        return accumulator;
      }, value);
    return result
}


function funcExec(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}


console.log(sumOrMul([1, 2, 3, 5, 8], 5))