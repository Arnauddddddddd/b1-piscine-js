function longWords(arr) {
    return arr.every((currentValue) => currentValue.length < 5);
}

function oneLongWord(arr) {
    return arr.every((currentValue) => currentValue.length >= 10);
}

function noLongWords(arr) {
    return arr.every((currentValue) => currentValue.length < 7);
}