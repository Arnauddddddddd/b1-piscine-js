import { styles } from '/pimp-my-style.data.js';

var index = 0;
var change = 1;

export const pimp = () => {
    if (change != -1) {
        document.querySelector("button").classList.add(styles[index]);
    } else if (document.querySelector("button").classList[-1] != "unpimp") {
        document.querySelector("button").classList.remove(styles[index]);
    } else {
        document.querySelector("button").classList.remove("unpimp");
        document.querySelector("button").classList.remove(styles[index]);
        document.querySelector("button").classList.add("unpimp");
    }
    console.log(index);
    index += change;
    if (index == styles.length) {
        change = -1;
        index--;
    } 

}