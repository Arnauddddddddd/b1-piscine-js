function isValid(date) {
    if (Number.isInteger(date)) {
        return true;
    }
    if (date == Date.now()) {
        return true;
    }
    return date instanceof Date && !isNaN(date);
}
