function firstDayWeek(number, year) {
    var date = new Date(parseInt(year), 0)
    for (var i = 0; i < number-1; i++) {
        date.setTime(date.getTime() + (60*60*1000) * 24 * 7);
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



console.log(firstDayWeek(2, "2000"))
console.log(firstDayWeek(1, 1000))