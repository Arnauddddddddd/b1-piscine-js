function isValid(date) {
    // if (expect(date).toEqual(expect.any(Number))) {
    //     return true;
    // }
    if (date == Date.now()) {
        return true;
    }
    return date instanceof Date && !isNaN(date);
}
