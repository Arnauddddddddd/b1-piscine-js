function addWeek(date) {
    const jour = date.getDate();
    var txt = ""
    if (jour > 7 && jour <= 14) {
        txt+= "Second"
        jour -= 7
    } else if (jour > 21 && jour <= 28) {
        txt+= "Second"
        jour -= 14
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

console.log(addWeek(new Date('0001-01-01')))