function DNA(str) {
    var txt = "";
    for (var i=0; i < str.length; i++) {
        if (str[i] == "C") {
            txt += "G"
        } else if (str[i] == "G") {
            txt += "C"
        } else if (str[i] == "A") {
            txt += "T"
        } else if (str[i] == "U") {
            txt += "A"
        }
    }
    return str;

}

function RNA(str) {
    var txt = "";
    for (var i=0; i < str.length; i++) {
        if (str[i] == "G") {
            txt += "C"
        } else if (str[i] == "C") {
            txt += "G"
        } else if (str[i] == "T") {
            txt += "A"
        } else if (str[i] == "A") {
            txt += "U"
        }
    }
    return str;
}