function isValid(date) {
    if (date == Date.now()) {
        return true;
    }
    return date instanceof Date && !isNaN(date);
}
