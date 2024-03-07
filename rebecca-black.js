function isFriday(date) {return (date.getDay() == 5)}

function isWeekend(date) {return (date.getDay() == 6 || date.getDay() == 0)}

function isLeapYear(date) {
    var leapDate = new Date(date.getYear(), 1, 29);
    return leapDate.getMonth() === 1 && leapDate.getDate() === 29;
}



function isLastDayOfMonth(date) {
   
    //var date2 = new Date(date.getYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes())
    var date2 = new Date(date)
    date2.setTime(date2.getTime() + (24*60*60*1000));


    console.log(date.getDate())
    console.log(date2.getDate())

    return (date2.getMonth() != date.getMonth())
}

console.log(isLastDayOfMonth(new Date('2020-12-30')))
console.log(isLastDayOfMonth(new Date('2020-02-28')))

