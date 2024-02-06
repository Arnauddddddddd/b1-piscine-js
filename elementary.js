function multiply(a, b) {
    var result = 0;
    var neg = false;
    if (a < 0) {
        a = -a;
        neg = true;
    }
    if (b < 0 && neg) {
        b = -b;
        neg = false;
    } else if (b < 0) {
        neg = true;
        b = -b;
    }
    for (let i = 0; i < b; i++) {
        result += a;
    } 
    if (neg) {
        result = -result;
    }
    return result;
}

function divide(a, b) {
    var result = 0;
    var neg = false;
    if ((a == 0) || (b == 0)) {
        return null;
    }
    if (a < 0) {
        a = -a;
        neg = true;
    }
    if (b < 0 && neg) {
        b = -b;
        neg = false;
    } else if (b < 0) {
        neg = true;
        b = -b;
    }
    while (a >= b) 
    { 
       a = a - b; 
       result++ ; 
    }
    if (neg) {
        result = -result;
    }
    return result;
}

console.log(divide(78, 32));