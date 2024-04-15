import { styles } from './pimp-my-style.data.js';

var index = 0;
var change = 1;

export const pimp = () => {
    if (change != -1) {
        document.querySelector("button").classList.add(styles[index]);
    } else {
        document.querySelector("button").classList.toggle("unpimp");
        document.querySelector("button").classList.toggle("unpimp");
        document.querySelector("button").classList.remove(styles[index]);
    }
    index += change;
    if (index == styles.length) {
        change = -1;
        index--;
    }
    if (index == -1 && change == -1) {
        change = 1;
        index++
        document.querySelector("button").classList.toggle("unpimp");
    }
    if (index == styles.length-2 && change == -1) {
        document.querySelector("button").classList.toggle("unpimp");
    }

}