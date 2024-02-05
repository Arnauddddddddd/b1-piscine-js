const escapeStr = "'" + "\\/" + '"' + "`";
const arr = [4, '2'];
const Object1 = {
    str: "",
    num: 0,
    bool: true,
    undef: undefined,
}
const Object2 = {
    str: "",
    num: 0,
    bool: true,
}
const obj = new Object.freeze(Object1);
const obj2 = new Object.freeze(Object2);
const nested = {
    arr: [4, undefined, '2'],
    obj: obj2,
};