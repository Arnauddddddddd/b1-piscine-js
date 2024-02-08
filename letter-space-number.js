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
                    if ((arrStr[i].charCodeAt(1) > 57 || arrStr[i].charCodeAt(1) < 48) && (arrStr[i].charCodeAt(1) > 122 || arrStr[i].charCodeAt(1) < 97) && (arrStr[i].charCodeAt(1) > 90 || arrStr[i].charCodeAt(1) < 65)) {
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

console.log(letterSpaceNumber('example 1, example 2up'))
console.log(letterSpaceNumber('Definitely 9.'))


'Definitely 9.'