function isValid(date) {

    if (expect(date1.getDate()).toEqual(expect.any(Number))) {
        return true;
    }
    if (date == Date.now()) {
        return true;
    }
    return date instanceof Date && !isNaN(date);
}
