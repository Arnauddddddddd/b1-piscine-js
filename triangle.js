function triangle(symbol, number, i = 1) {
    if (i <= number) {
        if (i == number) {
            return symbol.repeat(i) + triangle(symbol, number, i+1)
        }
        return symbol.repeat(i)  + "\n" + triangle(symbol, number, i+1)
    }
    return "";
}

console.log(triangle("*", 3))