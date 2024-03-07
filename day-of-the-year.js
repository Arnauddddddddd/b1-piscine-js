function dayOfTheYear(date) {
    var date2 = new Date(date.getYear(), 0);
    var count = 1
    while (date2.getMonth() != date2.getMonth() && date2.getDate() != date2.getDate()) {
        count++
        date2.setDate(new Date (date2.getYear(), date2.getMonth(), date2.getDate(), date2.getHours() + 24))
    }
    return count
}

console.log(dayOfTheYear(new Date('0001-01-01')))