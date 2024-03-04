function addWeek(date) {
    var jour2 = date.getDay()
    date = date.toString()
    var jour = parseInt(date[8] + date [9])
    var txt = ""
    if (jour > 7 && jour <= 14) {
        txt+= "second"
    } else if (jour > 21 && jour <= 28) {
        txt+= "second"
    }
    switch(jour2) {
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
        case 0:
            txt += "Sunday"
            break
    }
    return txt
}

console.log(addWeek(new Date('2025-08-11')))
console.log(addWeek(new Date('2001-11-07')))
console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday



