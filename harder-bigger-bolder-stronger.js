export const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var size = 11
    var weight = 300;
    for (var i = 0; i < 120; i++) {
        let div = document.createElement("div");
        let letter = document.createTextNode(alphabet.charAt(Math.floor(Math.random() * 26)));
        div.appendChild(letter);
        div.id = 'letter-' + i.toString();
        div.style.fontSize = size + "px";
        if (i == 30) { weight = 400}
        if (i == 80) { weight = 600}
        div.style.fontWeight = weight + "px";
        document.body.appendChild(div)
        size++
    }
}
