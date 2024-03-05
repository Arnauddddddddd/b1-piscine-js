function isFriday(date) {return (date.getDay() == 5)}

function isWeekend(date) {return (date.getDay() == 6 || date.getDay() == 0)}

function isLeapYear(date) {
    var leapDate = new Date(date.getYear(), 1, 29);
    return leapDate.getMonth() === 1 && leapDate.getDate() === 29;
}

function isLastDayOfMonth(date) {
    return ((date.setHours(date.getHours() + 24)).getMonth != date.getMonth())
}