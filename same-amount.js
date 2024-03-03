function sameAmount(str, reg1, reg2) {
    var regex1 = str.match(reg1);
    var regex2 = str.match(reg2);
    return regex1 !== null && regex2 !== null && regex1.length == regex2.length;
}