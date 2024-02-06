function negative(a, b, neg) {
    if (a < 0) {
        neg = true;
    }
    if (b < 0) {
        if (neg) {
            neg = false;
        } else {
            neg = true;
        }
    }
    return neg;
}


function multiply(a, b) {
    var result = 0;
    var neg = false;
    neg = negative(a, b, neg);
    a = Math.abs(a);
    b = Math.abs(b);
    for (let i = 0; i < b; i++) {
        result += a;
    } 
    if (neg) {
        result = -result;
    }
    return result;
}


function divide(a, b) {
    var neg = false;
    if ((a == 0) || (b == 0)) {
        return null;
    }
    neg = negative(a, b, neg);
    a = Math.abs(a);
    b = Math.abs(b);
    for (let i = 0; i < a; i++) {
        if (multiply(i, b) == a) {
            if (neg) {
                i = -i;
            }
            return i;
        }
        if (multiply(i, b) > a) {
            i--
            if (neg) {
                i = -i;
            }
            return i;
        }
    }
}

function modulo(a, b) {
    var sign = false;
    if (a < 0) {
        sign = true;
    }
    if (multiply(divide(a, b), b) == a) {
        return 0;
    }
    if (divide(a, b) == 0) {
        return a
    }
    if (sign) {
        return -1 + modulo(a+1, b);
    }
    return 1 + modulo(a-1, b);
}
