// There are couple ways of defining the functions

// Function binding - they are part of regular order flow - they have to be defined before using
const square = function (x) {
    return x * x;
};

// Function declaration - they aren't part of regular order flow - we can put them wherever we want
function square2(x) {
    return x * x;
}

// Arrow function - part of regular order flow
const square3 = (x) => {
    return x * x;
};
// If you have one parameter you can ommit "()" and if you have one line only, you can skip the return keyword and braces
const square4 = (x) => x * x;

console.log(`${square(5)} ${square2(5)} ${square3(5)} ${square4(5)}`);

// The difference between var and let is that in the old JS (where var was used) scopes were created only for functions
// That means if var is in any other scope than function it is a global variable
// And if let is in any other scope than function it is still a local variable

if (true) {
    let x = 10; // local
    var y = 20; // global
}

console.log(y);

// CALL STACK - the place where computer stores the context of the called function, when function returns its context is deleted

// If we give a function more parameters than it takes it will ignore the rest of them, if you pass too few it will fill them with undefined
console.log(square(5, "ninja", 15, 0, null, undefined));

// We can give a function's parameter a default value
const roundTo = (num, step = 1) => {
    let remainder = num % step;
    return num - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(`${roundTo(4.5)} ${roundTo(4.5, 2)}`);

// CLOSURE - being able to reference a specific instance of a local binding in an enclosing scope
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(5);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
