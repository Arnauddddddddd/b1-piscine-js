import { styles } from '/pimp-my-style.data.js';

var index = 0;

export const pimp = () => {
    document.querySelector("button").className = styles[index].toString();
    console.log(styles[index].toString());
    console.log(document.body.style);
    index++;
}