function countLeapYears(date) {
    firstYear = new Date(0, 0, 0, 0, 0)
    var count = 0
    var year = date.getYear() + 1900;
    for (var i = 0; i < year; i++) {
        if ((0 == (new Date(i).getYear()) % 4) && (0 != (new Date(i).getYear()) % 100) || (0 == (new Date(i).getYear()) % 400)) {
            count++
        }
    }
    return count;

    
}

console.log(countLeapYears(new Date()))