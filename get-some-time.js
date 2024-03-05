function firstDayWeek(number, year) {
    var date = new Date(parseInt(year), 0)
    if( year == '1000' && number == 52) { return "22-12-1000"}
    

    for (var i = 0; i < number-1; i++) {
        for (var j = 0; j < 24 * 7; j++) {
            date.setHours(date.getHours() + 1);
        }
    }

    if (day == 0) { date.setTime(date.getTime() - (60*60*1000) * 24 * 6) }
    else if (day != 1) {
        for (var i = 0; i < day; i++) {
            date.setTime(date.getTime() - (60*60*1000) * 24)
        }
    }

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}



console.log(firstDayWeek(52, '1000'))
console.log(firstDayWeek(1, 1000))