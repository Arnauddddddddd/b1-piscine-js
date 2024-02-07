function split(str, spl = "") {
    var arr = [];
    var numberSplit = 0;
    var actual = "";
    var lastFound = -2;
    var add = 1;
    for (let i = 0; i < str.length; i++) {
        actual = "";
        for (let k = 0; k < spl.length; k++) {
            actual += str[i + k]
        }
        if (actual == spl) {
            numberSplit++;
            if (lastFound + 1 == i) {
                add = 0;
            }
            lastFound = i;
        }

    }
    var nosplit = false;
    if (spl == "") {
        numberSplit = str.length;
        nosplit = true;
    }
    var j = 0;
    for (let i = 0; i < numberSplit+add; i++) {
        var toAdd = "";
        if (nosplit) {
            arr.push(str[j]);
            j++;
        } else {
            actual = "";
            while (actual != spl && j <= str.length-1) {
                for (let k = 0; k < spl.length; k++) {
                    actual += str[j + k];
                }
                if (actual != spl) {
                    actual = "";
                    toAdd += str[j];
                    j++;
                }
            }
            for (let k = 0; k < spl.length; k++) {
                j++;
            }
            arr.push(toAdd);
        }
    }
    return arr;
}

function join(arr, spl = "") {
    var res = "";
    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length-1) {
            res += arr[i] + spl
        } else {
            res += arr[i]
        }
    }
    return res;
}