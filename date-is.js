function isValid(date) {
    var pattern = new RegExp(/^\d{2}-\d{2}-\d{4}$/);
    return (date instanceof Date && !isNaN(date)) || pattern.test(date);
}
