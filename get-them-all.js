export const getArchitects = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    return [document.querySelectorAll("a"), document.querySelectorAll("span")];
}
export const getClassical = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    console.log(document.getElementsByClassName("classical"))
    return [document.querySelectorAll(".classical"), document.querySelectorAll(":not(.classical)")];
}

export const getActive = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    return [document.querySelectorAll(".classical(.active)"), document.getElementById(".classical:not(.active)")];
}

export const getBonannoPisano = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    return [document.getElementById("LolaDunam"), document.getElementById("LolaDunam")];
}