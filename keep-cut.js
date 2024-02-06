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
    return str[0] + str[1];
}
function keepLast(str) {
    return str[str.length - 2] + str[str.length - 1];
}
function keepFirstLast(str) {
    return keepFirst(keepLast(str));
}

console.log(cutFirst("string"))
console.log(cutLast("string"))
console.log(cutFirstLast("string"))