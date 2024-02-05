function isPositive(value) {
    return value > 0;
}

function abs(value) {
    if (isPositive(value)) {
        return value;
    }
    return value * -1;
}