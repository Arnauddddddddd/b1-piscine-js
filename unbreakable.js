function split(str, x) {
    var arr = [];
    var add = 0;
    var txt = "";
    for (var i = 0; i < str.length; i++) {
        add = 0;
        txt += str[i];
        for (var j = 0; j < x.length; j++) {
            if (str[i] == x[j]) {
                add++;
            }
        }
        if (add == x.length) {
            console.log(txt)
            arr.push(txt.slice(i-1, i-1+x.length));
        }
    }
    return arr;
}

console.log(split('a b c', ' '))