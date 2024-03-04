function isValid(date) {
    if (Number.isInteger(date)) {
        return true;
    }
    if (date == Date.now()) {
        return true;
    }
    return date instanceof Date && !isNaN(date);
}

function isAfter(date1, date2) {
    return date1 > date2;
}

function isBefore(date1, date2) {
    return date1 < date2;
}

function isFuture(date) {
    if (isValid(date)) {
        return isAfter(date, Date.now())
    }
    return false;
}

function isPast(date) {
    if (isValid(date)) {
        return isAfter(date, Date.now())
    }
    return false;
}