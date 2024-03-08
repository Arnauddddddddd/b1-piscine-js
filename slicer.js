function slice(arr, index, end =  arr.length) { 
    var result = []; 
    if (end < 0) {
        end = arr.length + end;
    } if (index < 0) {
        index = arr.length + index;
    } for (var i = index; i < end; i++ ) { 
        result.push(arr[i])
    } if (typeof arr === 'string') {
        return result.join("");
    } 
    return result;}




console.log(slice('abcdef', 0, 2))
console.log(slice('abcdef', 2))
console.log(slice('abcdef', 0, -2))
console.log(slice([1, 2, 3, 4, 5, 6], 2))