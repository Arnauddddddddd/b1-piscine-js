function multiply(a, b) {
    var result = 0;
    var neg = false;
    a, b, neg = negative(a, b, neg);
    for (let i = 0; i < b; i++) {
        result += a;
    } 
    if (neg) {
        result = -result;
    }
    return result;
}

function negative(a, b, neg) {
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
    return a, b, neg
}

function divide(a, b) {
    var neg = false;
    if ((a == 0) || (b == 0)) {
        return null;
    }
    a, b, neg = negative(a, b, neg);
    for (let i = 0; i < b; i++) {
        if (multiply(i, b) == a) {
            if (neg) {
                i = -i;
            }
            return i;
        }
        if (multiply(i, b) > a) {
            if (neg) {
                i = -i+1;
            }
            return i-1;
        }
    }
   
}

console.log(divide(78, 34));