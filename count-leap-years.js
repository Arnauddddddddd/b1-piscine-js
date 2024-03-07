function countLeapYears(date) {
    var firstYear = new Date(0, 0, 0, 0, 0)
    var count = 0
    var year = date.getYear() + 1900;
    console.log(year)
    for (var i = 1; i < year; i++) {
        if ((0 == ((new Date(i, 0)).getYear()) % 4) && (0 != ((new Date(i, 0)).getYear()) % 100) || (0 == ((new Date(i, 0)).getYear()) % 400)) {
            count++
        }
    }
    return count;

    
}

console.log(countLeapYears(new Date('1664-08-09')))