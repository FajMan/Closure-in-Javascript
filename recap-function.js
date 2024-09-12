// JS Function -> Is a block of codes designed to perform a certain tasks, it is executed when called or invoked.


function name(parameter) {
    CSSLayerStatementRule;
}

//Types of function.

// Function Declaration.


// One Parameter
function multiply(number) {
    return number * number;
}

const result = multiply(5);
console.log(result);


// No Parameter
function sum() {
    return 9 + 5;
}

console.log(sum());

// Two Parameters
function subtraction(a, b) {
    return a - b;
}

const subResult = subtraction(5, 4);
console.log(subResult);

// Assigning value to Param
function division(c, d = 7) {
    return c / d;
}

console.log(division(21));



// ==== Function Expression ==== 
const greeting = function sayHi(name) {
    console.log(`Hello ${name}`)
}

greeting("Teddy")


const testing = function Add(number) {
    return number + number
}
console.log(testing(7));


// Arrow function.
const arrow = (x) => x * x;
console.log(arrow(4));


const example2 = (tutor, student) => {
    const tutor1 = "OG";
    const tutor2 = "Teddy";

    const student1 = "Mubby";
    const student2 = "Rodi";

    return console.log(`Mr ${tutor2} is the tutor, while ${student1} is the GateMan`)
};
example2();



// Global Scope
const scope = 2;


const testScope = () => {
    const b = 10
    console.log(scope + b)
}
testScope()

let num = 5;

const testNum = () => {
    console.log(num);
    num = 10
}

testNum()
console.log(num)

// Local Scope
function localScope() {
    const name = "OG"
    const isPresent = true;
    const potBellied = true;

    console.log(name, isPresent, potBellied)
}
localScope()


const someFunction = () => {
    const name = "Yemi"

    const anotherFunction = (a) => {
        console.log(name);
        return a * a;
    };
    console.log(anotherFunction(5));
}
someFunction();


// Hoisting
hoistedFunction()

function hoistedFunction() {
    console.log("I am hoisted")
}

// Closure: It is a function that remembers the variables from its outer scope. Even after the outer function has returned, this concept allows the inner function to have access to the variables of outer functions. Even after the outer function has finished execution.

// function outterFunction(outterVariable) {
//     return 
//     function innerFuction(innerVariable) {
//         console.log(`outter Variable: ${outterVariable}`)
//         console.log(`inner Variable: ${innerVariable}`)
//     }
// }

// const newFunction = outterFunction("outside")
// newFunction("inside")

// Example one
const outter = () => {
    const outterVar = "Papasupe"
    const inner = () => {
        const innerVar = "Hi"
        console.log(outterVar, innerVar);
    }
    return inner
}
outter()


// Example Two
const init = () => {
    const hobby = "Dancing"
    const displayHobby = () => {
        console.log(hobby)
    }
    return displayHobby
}
const answer = init()
answer()


function checkMate () {
    let name = "Teddy"
    console.log(`Outter Function is for ${name}`)

    function checking () {
        console.log(`The user is ${name}`)
    }
    return checking
}
const checked = checkMate()
checked()



const outterFn = () => {
    const example = "my gee"
    console.log(example)

    const innerFn = () => {
        console.log("I am inner function")

        const nestedInnerFn2 = () => {
            console.log("I am nested inner function")
        }
        return nestedInnerFn2 // 
    }
    return innerFn
}
// outterFn()
const answer2 = outterFn() // To show only two functions
answer2()