function dayOfTheYear(date) {
    var date2 = new Date(date.getYear(), 0, 0, 0, 0);
    var count = 0
    console.log(date2.getMonth())
    console.log(date2.getDate())
    while (!(date2.getMonth() == date.getMonth() && date2.getDate() == date.getDate())) {
        count++
        date2.setDate(date2.getDate() + 1)

    }
    return count
}

console.log(dayOfTheYear(new Date('1664-08-09')))