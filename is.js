is.num = function(v) {
    return typeof(v) === 'number';
}
is.nan = function(v) {
    return Number.isNaN(v);
}
is.str = function(v) {
    return typeof(v) == String;
}
is.bool = function(v) {
    return typeof(v) == Boolean;
}
is.undef = function(v) {
    return typeof(v) == undefined;
}
is.def = function(v) {
    return typeof(v) != undefined;
}
is.arr = function(v) {
    return typeof(v) == Array;
}
is.obj = function(v) {
    return typeof(v) == Object;
}
is.fun = function(v) {
    return typeof(v) == Function;
}
is.truthy = function(v) {
    return v == true;
}
is.falsy = function(v) {
    return v == false;
}
