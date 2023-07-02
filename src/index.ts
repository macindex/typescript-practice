let a: number = 10;

a = 16;

console.log(x);


// inference 
let y = 12;

// annotation
let z:number = 12;

// Basic types

let firstName: string = "claudio";
let age: number = 30;
const isAdmin: boolean = true;

// Object
const myNumber: number[] = [1,2,3];

// Tuplas
let myTuple: [number, string, string[]];


myTuple = [5, "teste1", ["a", "b"]]
// myTuple = [true, false, true]

// Object literals 
const user: {name: string, age: number} = {
    name: "Claudio",
    age: 20
}

// Any
// bad practice

let b:any = 0;

b = "teste";
b = true;
b = 23;
b = [];

// Union type

let id: string | number = "10"


// Type alias

type myIdType = number | string 

const userId: myIdType = 10;
const productId: myIdType = "10";
const shirtId: myIdType = 123;


// Enum

enum Size {
    P = "Small",
    M = "Medium",
    G = "Big"
}

const shirt = {
    name: "Shirt v",
    size: Size.G
}

// Literal types

let teste: "autenticated" | null;

teste = "autenticated";
teste = null;

// Functions

function sum(a: number, b: number){
    return a + b;
}

console.log(sum(3, 2));

function sayHelloOne(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloOne("Claudio"));

function logger(msg: string): void{
	console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet ?: string ){
    if(greet){
        console.log(`Olá ${greet} ${name}`);
    }else{
        console.log(`Olá ${name}`)
    }
}

greeting("jose");
greeting("jose", "Sir");

// Interfaces





// export {};