function firstDayWeek(number, year) {
    var date = new Date(parseInt(year), 0)
    for (var i = 0; i < number; i++) {
        date.setTime(date.getTime() + (60*60*1000) * 24 * 7);
    }
    var d = (date + '').split(' ');
    d[2] = d[2] + ',';

    return [d[0], d[1], d[2], d[3]].join(' ');
}



console.log(firstDayWeek(0, "2000"))
console.log(firstDayWeek(1, 1000))