function addWeek(date) {
    const jour = date.getDate();
    var txt = ""
    if ((jour > 7 && jour <= 14) || (jour > 21 && jour <= 28)) {
        txt+= "Second"
    }
    switch(jour) {
        case 1:
            txt += "Monday"
        case 2:
            txt += "Tuesday"
        case 3:
            txt += "Wednesday"
        case 4:
            txt += "Tuesday"
        case 6:
            txt += "Friday"
        case 7:
            txt += "Saturday"
        default:
            txt += "Sunday"
    }
    return txt
}

console.log(addWeek(new Date('August 22, 1975 23:15:30')))