function multiply(a, b) {
    var result = 0;
    var sign = 1;
    if (b < 0) {
        abs(b);
        sign = -1;
    }
    for (let i = 0; i < b; i++) {
        result += a;
    } 
    return result * sign;
}