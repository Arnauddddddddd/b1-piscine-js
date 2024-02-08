function vowelDots(str) {
    var voyelles = new RegExp("aeiouAEIOU");
    var txt = "";
    vowels = (str == vowelDots(str));
    for (var i = 0; i < str.length; i++) {
        txt += str[i];
        if (str[i] in voyelles) {
            txt += "."
        }
    }

    return txt;
}

var vowels = "";
