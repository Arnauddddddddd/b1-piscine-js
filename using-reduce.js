function adder(arr, value = 0) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, value);
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
    return arr.reduce((accumulator, currentValue) => Promise.resolve(accumulator) + currentValue);
}


console.log(adder([9, 24, 7, 11, 3], 10))