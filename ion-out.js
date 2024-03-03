function ionOut(str) {
    list = str.split(" ")
    list2 = [];
    const reg = /tion/g;
    for (var i = 0; i < list.length; i++) {
        if (list[i].match(reg) != null) {
            list2.push(list[i].replace("ion", ""))
        }
    }
    return list2;
}
