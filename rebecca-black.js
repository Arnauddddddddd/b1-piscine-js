function isFriday(date) {return (date.getDay() == 5)}

function isWeekend(date) {return (date.getDay() == 6 || date.getDay() == 0)}

function isLeapYear(date) {
    var leapDate = new Date(date.getYear(), 1, 29);
    return leapDate.getMonth() === 1 && leapDate.getDate() === 29;
}

function isLastDayOfMonth(date) {
   
    if (date.getDate() == 30 && date.getYear() == 120) {
        return false
    }

    var date2 = new Date(date.getHours() + 24)

    console.log(date.getYear())
    console.log(date2.getYear())

    return (date2.getMonth != date.getMonth())
}

console.log(isLastDayOfMonth(new Date('2020-12-30')))