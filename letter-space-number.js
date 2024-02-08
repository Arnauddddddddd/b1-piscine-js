function letterSpaceNumber(str) {
    str.split();
    var arr = [];
    var letter = "";
    car = "";
    for (var i = 0; i < str.length; i++) {
        if ((str[i][0] < "9" && str[i][0] > "0") && (str[i][1] > "9" && str[i][1] < "0")) {
            letter = str[i-1][-1]
            if ((letter > "a" && letter < "z") || (letter > "A" && letter < "Z")) {
                car = letter + " " + str[i][0]
                arr.push(car);
                car = "";
            }
        } 
    }
    return arr;
}