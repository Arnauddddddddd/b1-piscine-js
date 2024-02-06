function multiply(a, b) {
    var result = 0;
    var neg = false;
    if (a < 0) {
        abs(a);
        neg = true;
    }
    if (b < 0 && neg) {
        abs(b);
        neg = false;
    } else if (b < 0) {
        neg = true;
    }
    for (let i = 0; i < b; i++) {
        result += a;
    } 
    if (neg) {
        result = result - result - result;
    }
    return result;
}