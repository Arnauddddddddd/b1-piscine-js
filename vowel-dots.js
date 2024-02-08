function vowelDots(str) {
    var txt = "";
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        txt += str[i];
        if (str[i] in vowels) {
            txt += "."
        }
    }
    return txt;
}