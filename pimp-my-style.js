import { styles } from '/pimp-my-style.data.js';

var index = 0;
var change = 1;

export const pimp = () => {
    document.querySelector("button").classList.toggle("unpimp");
    if (change != -1) {
        document.querySelector("button").classList.add(styles[index]);
    } else {
        document.querySelector("button").classList.remove(styles[index]);
        document.querySelector("button").classList.toggle("unpimp");
    }
    console.log(index);
    index += change;
    if (index == styles.length) {
        change = -1;
        index--;
    } 

}