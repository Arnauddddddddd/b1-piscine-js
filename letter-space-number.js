function letterSpaceNumber(str) {
    arrStr = str.split(" ");
    var arr = [];
    var letter = "";
    car = "";
    for (var i = 0; i < arrStr.length; i++) {
        if ((arrStr[i] <= '9' && arrStr[i] >= '0') && arrStr[i].length == 1) {
            letter = arrStr[i-1];
            if ((letter > "a" && letter < "z") || (letter > "A" && letter < "Z")) {
                car = letter[letter.length-1] + " " + arrStr[i][arrStr[i].length-1]
                arr.push(car);
                car = "";
            }
        } 
    }
    return arr;
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))