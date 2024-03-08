function filterShortStateName(arr) {
    return arr.filter((word) => word.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((word) => /[aeiouAEIOU]/.test(word[0]));
}

function filter5Vowels(arr) {
    return arr.filter((word) => (
        word.includes("a") &&
        word.includes("e") &&
        word.includes("i") &&
        word.includes("o") &&
        word.includes("u")
      ));
}

