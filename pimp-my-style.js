import { styles } from '/pimp-my-style.data.js';

var index = 0;

export const pimp = () => {
    document.querySelector("button").className = styles[index].toString();
    console.log(index);
    if (index == styles.length-1) {
        styles.pop()
        index--;
    } else {
        index++;
    }
}