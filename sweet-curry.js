function mult2(a) {
    return function (b) {
        return a * b;
    }
}

function add3(a) {
    if (b != null) {
        return function(b) {
            return a + b;
        }
    }
    return a
   
}

function sub4(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b;
            }
        }
    }
}

console.log(add3(1)(2)(3))