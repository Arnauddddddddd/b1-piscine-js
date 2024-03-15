function longWords(str) {
    var list = str.split(' ');
    for (var i = 0; i < list.length; i++) {
        if (list[i].length < 5) { return false;}
    }
    return true;
}