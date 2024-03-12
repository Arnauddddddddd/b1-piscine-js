function adder(arr, value = 0) {
    return arr.reduce((accumulator, currentValue, value) => accumulator + currentValue);
}

function sumOrMul(arr, value = 0) {
    var result = arr.reduce((accumulator, currentValue) => {
        if (currentValue % 2 == 0 ) return accumulator * currentValue;
        if (currentValue % 2 == 1 ) return accumulator + currentValue;
        return accumulator;
      }, value);
    return result
}




console.log(sumOrMul(adder([9, 24, 7, 11, 3], 10)))