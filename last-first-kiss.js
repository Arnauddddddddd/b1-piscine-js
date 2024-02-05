first: that takes an array or a string and returns its first element or character.

last: that takes an array or a string and return its last element or character.

kiss: that takes an array or string, and returns an array of 2 elements. The returned array should contain the last and first elements or characters, in that order.

function first(arg) {
    return arg[0];
}
function last(arg) {
    return arg[arg.length-1];
}
function kiss(arg) {
    return [arg[0], arg[arg.length-1]];
}