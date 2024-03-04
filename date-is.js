function isValid(date) {
    if (date instanceof int) {
        return true;
    }
    if (date == Date.now()) {
        return true;
    }
    return date instanceof Date && !isNaN(date);
}
