function addWeek(date) {
    const jour = date.getDate();
    var txt = ""
    if ((jour > 7 && jour <= 14) || (jour > 21 && jour <= 28)) {
        txt+= "Second"
    }
    switch(jour) {
        case 1:
            txt += "Monday"
            break
        case 2:
            txt += "Tuesday"
            break
        case 3:
            txt += "Wednesday"
            break
        case 4:
            txt += "Tuesday"
            break
        case 6:
            txt += "Friday"
            break
        case 7:
            txt += "Saturday"
            break
        default:
            txt += "Sunday"
            break
    }
    return txt
}

console.log(addWeek(new Date('0001-01-01')))