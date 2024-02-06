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
    for (let i = 0; i < b; i++) {
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

console.log(divide(123, -22));
console.log(multiply(123, -22));
