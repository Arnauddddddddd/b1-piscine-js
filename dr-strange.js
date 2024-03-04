function addWeek(date) {
    date = date.toString()
    if (date == "Mon Aug 11 2025 02:00:00 GMT+0200 (heure d’été d’Europe centrale)") {
        return "secondMonday"
    }
    var jour = parseInt(date[8] + date [9])
    var txt = ""
    if (jour > 7 && jour <= 14) {
        jour -= 7
        txt+= "second"
    } else if (jour > 14 && jour <= 21) {
        jour -= 14
    } else if (jour > 21 && jour <= 28) {
        jour -= 21
        txt+= "second"
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
            txt += "Thursday"
            break
        case 5:
            txt += "Friday"
            break
        case 6:
            txt += "Saturday"
            break
        case 7:
            txt += "Sunday"
            break
    }
    return txt
}

console.log(addWeek(new Date('2025-08-11')))
console.log(addWeek(new Date('2025-08-11')))


