export const build = (nbr) => {
    let i = 0;
    let interval = setInterval(function() {
        let div = document.createElement("div");
        const brick = document.createElement('brick');
        div.append(brick);
        div.id = 'brick-' + i.toString();  
        document.body.appendChild(div)
        if (i == nbr) {
            clearInterval(interval)
        }
        i++
    }, 1000)
    
}

export const repair = () => {
    return null;
}

export const destroy = () => {
    return null;
}

