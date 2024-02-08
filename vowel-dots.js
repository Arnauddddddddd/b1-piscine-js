function vowelDots(str) {
    var txt = "";
    var voyelles = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        txt += str[i];
        if (str[i] in voyelles) {
            txt += "."
        }
    }
    return txt;
}