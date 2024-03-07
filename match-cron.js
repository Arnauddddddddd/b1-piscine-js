function matchCron(str, date) {
    var list = str.split(" ")
    var listTime = [date.getMinutes(), date.getHours(), date.getDate(), date.getMonth()+1, date.getYear()+1900]
    console.log(listTime)
    console.log(list)

    for (var i = 0; i < list.length; i++) {
        if (list[i] != "*") {
            if (parseInt(list[i]) != listTime[i]) {
                return false;
            }
        }
    }
    return true;
}

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')))
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')))
