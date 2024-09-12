// function declaration

function functionName() {
    
}


function greet() {
    
}

// function expression

// const functionName = function () {

// }

// arrow function

// const add = (a, b) => {
//     return a + b
// }

// console.log(add(5, 4))



function sayHi (name) {
    console.log(`Hello ${name}`);
}
sayHi("Emmanuel")
sayHi("Chapo")
sayHi("Teddy")
sayHi("Mubby")


const cohorts = (tutor, student) => {
    const tutor1 = "Lagbaja"
    const student2 = "Alamu"
    return console.log(`Mr. ${tutor1} is the best tutor of the year, While Mr. ${student2} is part of the cohorts`)
}
cohorts()


const tester = () => {
    console.log(3+5)
}
tester()


const logAge = (name, age) => {
    console.log(`${name} is ${age} years old`)
}

logAge("Joe", 35)


const select = () => {
    const sentence = console.log("I love the world")
    return sentence
}
select()


// scope
const nameTwo = "Ade"; // Global scope

const logName = () => {
    console.log(nameTwo)
}
logName()


const globalVar = "Am Global"; // Global scope

function acceccGlobal() {
    console.log(globalVar);
}
acceccGlobal()



//local scope
const example = () => {
    let localScope = "local Champipion"
    console.log(localScope)
}
example()


const someFunction = () => {
    let name = "Yemi"
    console.log(name)
    const anotherFunction = () => {
        console.log(name)
    }
    anotherFunction()
}
someFunction()


const someFunction2 = () => {
    const name = "John";
    console.log(name)
}

const anotherFunction1 = () => {
    const name = "Kanaz";
    console.log(name)
}
someFunction2()
anotherFunction1()



// Block Scope
if (true) {
    let blockScoped = "am a blocked";
    console.log(blockScoped);
}


var myFunc = function() {
    console.log("hi")
}
myFunc()

console.log(x)
var x = 10
console.log(x)

greeting();
function greeting() {
    console.log("Hello");
}