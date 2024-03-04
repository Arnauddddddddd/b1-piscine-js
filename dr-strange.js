function addWeek(date) {
    var jourBase = new Date('0001-01-01')
    var jour2 = date.getDay()
    var diff = Math.round((date - jourBase) / (1000 * 60 * 60 * 24));
    var count = 0
    var txt = ""

    for (var i = 1; i <= diff; i++) {
        if (i % 7 == 0) {
            count++
        }
    }
    if (count % 2 != 0) {
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


function timeTravel(object) {
    var date1 = Object.values(object)[0];
    var int1 = Object.values(object)[1]
    var int2 = Object.values(object)[2]
    var int3 = Object.values(object)[3]
    date1.setHours(int1, int2, int3);
    return date1
}




