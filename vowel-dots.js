function vowelDots(str) {
    var voyelles = "aeiouAEIOU";
    var txt = "";
    for (var i = 0; i < str.length; i++) {
        txt += str[i];
        for (var j = 0; j < voyelles.length; j++) {
            if (str[i] == voyelles[j]) {
                txt += "."
            }
        }
    }
    return txt;
}

var vowels = /[aeiou]/g;
