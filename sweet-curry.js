function mult2(a) {
    return function (b) {
        return a * b;
    }
}

function add3(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

function sub4(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a - b - c - d;
            }
        }
    }
}

// const curry = (fn) => {
//     return curried = (...args) => {
//         if (fn.length !== args.length) {
//             return curried.bind(null, ...args);
//         }
//         return fn(...args);
//     };
// }

// //console.log(add3(1)(2))

// const total = (x, y, z) => x + y + z;

// const curriedTotal = curry(total);
// console.log(curriedTotal(1)(2));