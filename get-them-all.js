export const getArchitects = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    return [document.querySelectorAll("a"), document.querySelectorAll("span")];
}
export const getClassical = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    return [document.getElementsByClassName("classical"), document.getElementsByClassName(not("classical"))];
}

export const getActive = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    return [document.getElementById("LolaDunam"), document.getElementById("LolaDunam")];
}

export const getBonannoPisano = () => {
    //return [['BillieElliott', 'BillieElliott'],  ['BillieElliott', 'BillieElliott']]
    return [document.getElementById("LolaDunam"), document.getElementById("LolaDunam")];
}