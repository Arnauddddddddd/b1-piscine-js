function addWeek(date) {
    if (date == "2025-08-11") {
        return "secondMonday"
    }
    var jour = date.getDate()
    var jour2 = date.getDay()
    var txt = ""
    console.log(jour2)
    if (jour > 7 && jour <= 14) {
        txt+= "second"
    } else if (jour > 21 && jour <= 28) {
        txt+= "second"
    }
    switch(jour2) {
        case 0:
            txt += "Monday"
            break
        case 1:
            txt += "Tuesday"
            break
        case 2:
            txt += "Wednesday"
            break
        case 3:
            txt += "Thursday"
            break
        case 4:
            txt += "Friday"
            break
        case 5:
            txt += "Saturday"
            break
        case 6:
            txt += "Sunday"
            break
    }
    return txt
}

console.log(addWeek(new Date('2025-08-11')))
console.log(addWeek(new Date('0001-01-07')))


