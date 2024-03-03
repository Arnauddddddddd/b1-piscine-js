function sameAmount(str, rexp1, rexp2) {
    var reg1 = str.match(new RegExp(rexp1, "g"));
    var reg2 = str.match(new RegExp(rexp2, "g"));
    if (reg1 == null|| reg2 == null) {
        return false;
    }
    return reg1.length == reg2.length;
}