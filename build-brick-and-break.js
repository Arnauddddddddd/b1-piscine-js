export const build = (nbr) => {
    let div = document.createElement("div");
    for (var i = 0; i < nbr; i++) {
        const brick = document.createElement('brick');
        brick.id = 'brick-' + i.toString();
        div.append(brick);
    }
    return div;   
}

console.log(build(34))
build(34)

export const repair = () => {
    return null;
}

export const destroy = () => {
    return null;
}

