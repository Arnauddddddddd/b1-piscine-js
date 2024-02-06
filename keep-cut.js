/*
cutFirst: returns the string with the first 2 characters removed.

cutLast returns the string with the last 2 characters removed.

cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

keepFirst returns only the first 2 characters.

keepLast returns only the last 2 characters.

keepFirstLast returns the first 2 characters, and the last 2 characters.
*/

function cutFirst(str) {
    return str.split("").slice(2).join("");
}
function cutLast(str) {
    return str.split("").slice(0,str.length - 2).join("");
}
function cutFirstLast(str) {
    return cutFirst(cutLast(str)); 
}
function keepFirst(str) {
    if (str.length < 2) {
        return str;
    }
    return str[0] + str[1];
}
function keepLast(str) {
    if (str.length < 2) {
        return str;
    }
    return str[str.length - 2] + str[str.length - 1];
}
function keepFirstLast(str) {
    if (str.length < 4) {
        return str;
    }
    return keepFirst(str) + keepLast(str);
}