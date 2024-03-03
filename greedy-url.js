function getURL(str) {
    var list = str.split(" ")
    var reg = /http/g;
    var reg2 = /.com/g;
    var list2 = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].match(reg) != null && list[i].match(reg2) != null) {
            list2.push(list[i])
        }
    }
    return list2
}


console.log(getURL("qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you"))