function isPositive(value) {
    return value > 0;
}

function abs(value) {
    if (value == 0) {
        return -0;
    }
    if (isPositive(value)) {
        return value;
    }
    return value * -1;
}