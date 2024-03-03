function ionOut(str) {
    list = str.split(" ")
    list2 = [];
    console.log(list)
    const reg = /tion/g;
    for (var i = 0; i < list.length; i++) {
        if (list[i].match(reg) != null) {
            list2.push(list[i])
        }
    }
    return list2;
}