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

function containsOnevoyel(arr) {
    return arr.filter((word) => (word.includes("a") || word.includes("e") ||word.includes("i") || word.includes("o") || word.includes("u")
    || word.includes("A") || word.includes("E") ||word.includes("I") || word.includes("O") || word.includes("U")));
}



function multiFilter(arr) {
    return arr.filter((obj) => (obj["capital"].length >= 8 && (filterStartVowel([obj["name"]])).length == 0 && (containsOnevoyel([obj["tag"]])).length == 1 && obj["region"] != "South"));
}

//(obj["capital"].length >= 8 && (filterStartVowel([obj["name"]])).length != 0 && !(/[aeiouAEIOU]/.test(obj["tag"])) && obj["region"] != "South"


console.log(multiFilter([
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
      tag: 'MO',
      name: 'Uissouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    {
      tag: 'PA',
      name: 'Uennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
  ]))