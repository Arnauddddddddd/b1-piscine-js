
let i = 1;

export const build = (nbr) => {
    let interval = setInterval(function() {
        let div = document.createElement("div");
        const brick = document.createElement('brick');
        div.append(brick);
        div.id = 'brick-' + i.toString();
        if (i % 3 === 2) {
            div.dataset.foundation = true;
        }
        document.body.appendChild(div)
        if (i == nbr) {
            clearInterval(interval)
        }
        i++
    }, 100) 
}


export const repair = (id) => {
    if (document.getElementById(id).hasAttribute("data-foundation")) {
        document.getElementById(id).dataset.repaired = "in progress";
    } else {
        document.getElementById(id).dataset.repaired = true;
    }
}

export const destroy = () => {
    const element = document.querySelector("#brick-" + (i-1).toString()).remove();
    i--
}

