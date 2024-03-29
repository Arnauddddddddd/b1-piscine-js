export const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var fontsize = 11
    var fontweight = 300;
    for (var i = 1; i <= 120; i++) {
        let div = document.createElement("div");
        let letter = document.createTextNode(alphabet.charAt(Math.floor(Math.random() * 26)));
        div.appendChild(letter);
        div.id = 'letter-' + i.toString();

        div.style.fontSize = fontsize + "px";
        if (i == 40) { fontweight = 400}
        if (i == 80) { fontweight = 600}
        div.style.fontWeight = fontweight + "px";
        document.body.appendChild(div)
        fontsize++

    }
}
