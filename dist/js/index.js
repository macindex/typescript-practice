"use strict";
let x = 10;
x = 16;
console.log(x);
// inference 
let y = 12;
// annotation
let z = 12;
// Basic types
let firstName = "claudio";
let age = 30;
const isAdmin = true;
// Object
const myNumber = [1, 2, 3];
// Tuplas
let myTuple;
myTuple = [5, "teste1", ["a", "b"]];
// myTuple = [true, false, true]
// Object literals 
const user = {
    name: "Claudio",
    age: 20
};
// Any
// bad practice
let a = 0;
a = "teste";
a = true;
a = 23;
a = [];
// Union type
let id = "10";
const userId = 10;
const productId = "10";
const shirtId = 123;
// Enum
var Size;
(function (Size) {
    Size["P"] = "Small";
    Size["M"] = "Medium";
    Size["G"] = "Big";
})(Size || (Size = {}));
const shirt = {
    name: "Shirt v",
    size: Size.G
};
// Literal types
let teste;
teste = "autenticated";
teste = null;
// Functions
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 2));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Claudio"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("jose");
greeting("jose", "Sir");
// Interfaces
// export {};
