function RNA(str) {
    for (var i=0; i < str.length; i++) {
        if (str[i] == "C") {
            str = "G"
        } else if (str[i] == "G") {
            str = "C"
        } else if (str[i] == "A") {
            str = "T"
        } else if (str[i] == "U") {
            str = "A"
        }
    }
    return str;

}

function DNA(str) {
    for (var i=0; i < str.length; i++) {
        if (str[i] == "G") {
            str = "C"
        } else if (str[i] == "C") {
            str = "G"
        } else if (str[i] == "T") {
            str = "A"
        } else if (str[i] == "A") {
            str = "U"
        }
    }
    return str;
}