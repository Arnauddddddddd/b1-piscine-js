function get(src, path) {
    var arr = path.split(".")
    if (path == "") return src;
    if (src[arr[0]] ==undefined) return undefined;
    return get(src[arr[0]], arr.slice(1).join("."));
}


console.log(get({ nested: { key: 'value' } }, 'nested.key'))