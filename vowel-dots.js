function vowelDots(str) {
    var txt = "";
    for (var i = 0; i < str.length; i++) {
        txt += str[i];
        if (str[i] in vowels) {
            txt += "."
        }
    }
    return txt;
}

var vowels = new RegExp("aeiouAEIOU");
