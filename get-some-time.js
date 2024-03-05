function firstDayWeek(number, year) {
    var date = new Date(parseInt(year), 0)
    for (var i = 0; i < number; i++) {
        date.setTime(date.getTime() + (60*60*1000) * 24 * 7);
    }
    var jour = date.getDay()
    switch(jour) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 0:
            return "Sunday"
    }
}


console.log(firstDayWeek(0, 2000))