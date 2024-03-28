function split(String, separator) {
    if (separator === null || separator === undefined) {
        separator = ',';
    }

    return String.split(separator);
}

function join(Array, separator) {
    if (separator === null || separator === undefined) {
        separator = ',';
    }

    return Array.join(separator);
}