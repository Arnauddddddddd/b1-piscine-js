is.num = function(v) {
    return typeof(v) === 'number';
}
is.nan = function(v) {
    return Number.isNaN(v);
}
is.str = function(v) {
    return typeof(v) === 'string';
}
is.bool = function(v) {
    return typeof(v) === 'boolean';
}
is.undef = function(v) {
    return typeof(v) === 'undefined';
}
is.def = function(v) {
    return typeof(v) !== 'undefined';
}
is.arr = function(v) {
    return Array.isArray(v);
}
is.obj = function(v) {
    return typeof(v) === typeof new Object;
}
is.fun = function(v) {
    return typeof{}(v);
}
is.truthy = function(v) {
    return v == true;
}
is.falsy = function(v) {
    return v == false;
}
