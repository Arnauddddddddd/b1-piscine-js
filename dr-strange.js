function addWeek(date) {
    var jourBase = new Date('0001-01-01')
    var jour2 = date.getDay()
    var diff = Math.round((date - jourBase) / (1000 * 60 * 60 * 24));
    var count = 0
    var txt = ""

    for (var i = 1; i < diff; i++) {
        if (i % 7 == 0) {
            count++
        }
    }

    if (count % 2 == 0) {
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

console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday
console.log(addWeek(new Date('2001-05-11'))) // Output: secondFriday


