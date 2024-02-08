function vowelDots(str) {
    var vowels = "";
    var voyelles = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        vowels += str[i];
        if (str[i] in voyelles) {
            vowels += "."
        }
    }
    return vowels;
}