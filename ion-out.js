function ionOut(str) {
    str = str.replace(".", "");
    str = str.replace(",", "");
    var list = str.split(" ");
    var list2 = [];
    const reg = /tion/g;
    for (var i = 0; i < list.length; i++) {
        if (list[i].match(reg) != null) {
            list2.push(list[i].replace("ion", ""))
        }
    }
    return list2;
}

console.log(ionOut('attention, direction'))