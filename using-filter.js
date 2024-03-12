function filterShortStateName(arr) {
    return arr.filter((word) => word.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((word) => /[aeiouAEIOU]/.test(word[0]));
}

function filter5Vowels(arr) {
    var txt = arr.filter((word) => word);
    var arr2 = []
    for (var word of txt) {
        var count = 0;
        for (var i = 0; i < word.length; i++) {
            if (word[i].includes("a") || word[i].includes("e") ||word[i].includes("i") || word[i].includes("o") || word[i].includes("u")) {
                count++
            }
        }
        if (count >= 5) { arr2.push(word)}
    }
    return arr2
}


function filter1DistinctVowel(arr) {
    var txt = arr.filter((word) => word);
    var arr2 = [];
    var arrVoyels = ["a", "e", "i", "o", "u"];
    for (var j = 0; j < arr.length; j++) {
        var count = 0;
        for (var i = 0; i < arrVoyels.length; i++) {
            if (arr[j].toLowerCase().includes(arrVoyels[i])) {
                count++
            }
        }
        if (count == 1) { arr2.push(arr[j])}
    };
    return arr2;
}



console.log(filter1DistinctVowel([
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Marylaund',
    'Mississippi',
    'New Jersey',
    'Tennessee',
  ]))