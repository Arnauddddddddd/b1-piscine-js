function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    var word = "";
    for (var i = 0; i < set.size; i++) {
        word += set[i];
    }
    return word;
}

function strToArr(str) {
    return str.split(' ');
}

function strToSet(str) {
    return new Set(str.split(' '));
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function objToMap(object) {
    return new Map(Object.entries(object));
}

function objToArr(object) {
    return Object.values(object);
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}

function strToObj(str) {
    return Object.assign({}, str.split(' '));
}

function superTypeOf(value) {
    if (Array.isArray(value)) {
        return "Array";
    } else if (value instanceof Set) {
        return "Set";
    } else if (value instanceof Map) {
        return "Map";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "object") {
        return "Object";
    } else if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    } else if (typeof value === "boolean") {
        return "Boolean";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "function") {
        return "Function";
    }
}