function pyramid(symbol, number, i = 0) {
    if (i < number) {
        if (i+1 == number) {
            return " ".repeat(number - i-1) + symbol.repeat(i*2+1) + pyramid(symbol, number, i+1)
        }
        return " ".repeat(number - i-1) + symbol.repeat(i*2+1)  + "\n" + pyramid(symbol, number, i+1)
    }
    return "";
}

console.log(pyramid("*", 3))