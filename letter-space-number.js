function letterSpaceNumber(str) {
    var arrStr = str.split(" ");
    var arr = [];
    var letter = "";
    var car = "";
    for (var i = 0; i < arrStr.length; i++) {
        if ((arrStr[i] <= '9' && arrStr[i] >= '0')) {
            console.log(arrStr[i])
            letter = arrStr[i-1];
            if ((letter > "a" && letter < "z") || (letter > "A" && letter < "Z")) {
                if (arrStr[i].length != 1) {
                    if (!(arrStr[i][1] < '9' && arrStr[i][1] > '0') && ((arrStr[i][1] > 'z' && arrStr[i][1] < 'a') || (arrStr[i][1] > 'Z' && arrStr[i][1] < 'A'))) {
                        car = letter[letter.length-1] + " " + arrStr[i][0]
                        arr.push(car);
                        car = "";
                    }
                } else {
                    car = letter[letter.length-1] + " " + arrStr[i][0]
                    arr.push(car);
                    car = "";
                }
            }
        } 
    }
    return arr;
}

console.log(letterSpaceNumber('I like 7up.'))