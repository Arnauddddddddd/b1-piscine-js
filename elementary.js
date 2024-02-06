function multiply(a, b) {
    var result = 0;
    var neg = false;
    if (a < 0) {
        a = Math.abs(a);
        neg = true;
    }
    if (b < 0 && neg) {
        b = Math.abs(b);
        neg = false;
    } else if (b < 0) {
        neg = true;
        b = Math.abs(b);
    }
    for (let i = 0; i < b; i++) {
        result += a;
    } 
    if (neg) {
        result = result - result - result;
    }
    return result;
}

function divide(a, b) {
    var result = 0; 
    if ((a == 0) || (b == 0)) {
        return null;
    }
    for (let i = a; i < b; i++) {
        if (a * i == b) {
            return i;
        }
    }
    return result;
}

console.log(divide(4, 20));