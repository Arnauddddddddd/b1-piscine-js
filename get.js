function get(src, path) {
    var arr = path.split(".")
    var result;
    var object = src;
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            return object[arr[i]];
        }
        object = src[arr[i]];     
    }
}


console.log(get({ nested: { key: 'value' } }, 'nested.key'))