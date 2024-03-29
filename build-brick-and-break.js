


export const build = (nbr) => {
    let i = 1;
    let list = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56]
    let interval = setInterval(function() {
        let div = document.createElement("div");
        const brick = document.createElement('brick');
        div.append(brick);
        div.id = 'brick-' + i.toString();
        if (list.includes(i)) {
            div.dataset.foundation = true;
        }
        document.body.appendChild(div)
        if (i == nbr) {
            clearInterval(interval)
        }
        i++
    }, 100)
    
}

export const repair = () => {
    return null;
}

export const destroy = () => {
    return null;
}

