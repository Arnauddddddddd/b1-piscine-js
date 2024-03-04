function addWeek(date) {
    jour2 = date.getDay()
    date = date.toString()
    var jour = parseInt(date[8] + date [9])
    console.log(jour)
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

