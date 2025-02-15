function round(value) {
    if (value < 0) {
        return -1 * round(-value);
    }
    if (Number.isInteger(value)) {
        return value;
    }
    if (value > 1) {
        return 1 + round(value-1);
    } else if (value < 0.5) {
        return 0
    }
    return 1;
}

function ceil(value) {
    if (value < 0) {
        return 1 + -ceil(-value);
    }
    if (Number.isInteger(value)) {
        return value;
    }
    if (value > 1) {
        return 1 + ceil(value-1);
    } else if (value < 1 && value > 0) {
        return 1
    }
    return 0;
}

function floor(value) {
    if (value < 0) {
        return -1 + -floor(-value);
    }
    if (Number.isInteger(value)) {
        return value;
    }
    if (value > 1) {
        return 1 + floor(value-1);
    } else if (value > 0) {
        return 0
    }
    return 0;
}


function trunc(value) {
    if (value >= 0xfffffffff) {
        value -= 0xfffffffff;
        return  trunc(value) + 0xfffffffff;
    }
    if (value < 0) {
        return -trunc(-value);
    }
    if (Number.isInteger(value)) {
        return value;
    }
    if (value > 1) {
        return 1 + trunc(value-1);
    } else if (value < 1) {
        return 0
    }
    return 0;
}
