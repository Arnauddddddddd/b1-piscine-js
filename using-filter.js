function filterShortStateName(arr) {
    return arr.filter((word) => word.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((word) => /[aeiouAEIOU]/.test(word[0]));
}