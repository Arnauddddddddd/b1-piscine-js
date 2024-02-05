function words(word) {
    return word.split(' ');
}

function sentence(arr) {
    return arr.join(' ')
}

function yell(word) {
    return word.toUpperCase()
}

function whisper(word) {
    return word.toLowerCase()
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}