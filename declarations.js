const escapeStr = "'" + "\\/" + '"' + "`";
const arr = [4, '2'];
var Object1 = {
    str: "",
    num: 0,
    bool: true,
    undef: undefined,
}
var Object2 = {
    str: "",
    num: 0,
    bool: true,
}
const obj = new Object(Object1);
const nested = {
    arr: [4, undefined, '2'],
    obj: new Object(Object2),
};