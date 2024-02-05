function sign(value) {
    if (value == 0) {
        return 0;
    }
    if (value < 0) {
        return -1;
    }
    return 1;
}

function sameSign(v1, v2) {
    return (sign(v1) == sign(v2));
}