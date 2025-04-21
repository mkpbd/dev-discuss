// string 
let fullName: string = "John Doe";

// number
let age = 30;


// boolean
let isEmployed: boolean = true;


// any 


// let , var , const 

// array 
const  nuymberArray : number[] = [1, 2, 3, 4, 5];
const  numberArray2 : Array<number> = [1, 2, 3, 4, 5];

// tuple
const tuple: [string, number] = ["John", 30];

// any 

let anyValues: any = "Hello";
anyValues = 42; // Now it's a number
anyValues = true; // Now it's a boolean  

// never 

let a : never;

let und : undefined = undefined;
let nul : null = null;

const obj : object = {

    name: "John",
    age: 30,
    isEmployed: true
};


let fun : Function = () => {
    console.log("Hello, World!");
}

// string 

let firstName: string = "mostofa ";
let middleName : string = "kamal";
let lastName : string = "Passa";


// Number 

let price : number = 100;
let discount : number = 0.1;
let finalPrice : number = price - (price * discount);
//Boolean 

let isAvailable : boolean = true;
let isActive : boolean = false;

// Special Types 

let anyValue : any = "Hello, World!";
anyValue = 42; // Now it's a number
anyValue = true; // Now it's a boolean
anyValue = null; // Now it's null
anyValue = undefined; // Now it's undefined
anyValue = {}; // Now it's an object
anyValue = []; // Now it's an array
anyValue = () => {}; // Now it's a function
anyValue = Symbol("symbol"); // Now it's a symbol
// anyValue = BigInt(12345678901234567890); // Now it's a BigInt
anyValue = new Date(); // Now it's a Date object
anyValue = /regex/; // Now it's a regular expression
anyValue = new Map(); // Now it's a Map object
anyValue = new Set(); // Now it's a Set object`
anyValue = new WeakMap(); // Now it's a WeakMap object
anyValue = new WeakSet(); // Now it's a WeakSet object
anyValue = new ArrayBuffer(8); // Now it's an ArrayBuffer object

// Unknown 

let userInput : unknown = "Hello, World!";
userInput = 42; // Now it's a number
userInput = true; // Now it's a boolean 


// never 

function throwError(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {}
}


// Object 

let user : object = {
    name: "John Doe",
    age: 30,
    isEmployed: true
};


// array 

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];

let namesArr : Array<string> = ["John", "Jane", "Doe"];
let mixedArr : Array<string | number> = ["John", 30, "Doe", 25];


let tupleArr : [string, number][] = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];

let tupleArr2 : Array<[string, number]> = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArr3 : [string, number][] = [  
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];


let tupleArr4 : Array<[string, number]> = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArr5 : [string, number][] = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];



// Function Types 

function  addNumberAndReturn (num1: number, num2: number): number {
    return num1 + num2;
}


// Tuple  types

let personTupple : [string , number, boolean] = ["John", 30, true];
let personTupple2 : [string, number, boolean] = ["John", 30, true];


// Enum types

enum  color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}


// union Types


let id : string | number = "12345";
id = 12345; // Now it's a number
id = "67890"; // Now it's a string

 // Literal Types 

let discounts : 0 | 10 | 20 | 30 = 10;
discounts = 20; // Now it's a number

let statusForMessage: "success" | "error" | "loading" = "success";
statusForMessage = "error"; // Now it's a string
statusForMessage = "loading"; // Now it's a string
// statusForMessage = "completed"; // Error: Type '"completed"' is not assignable to type '"success" | "error" | "loading"'


// type Alias 
type Direction = "North" | "South" | "East" | "West";
type Status = "success" | "error" | "loading";
type UserRole = "admin" | "user" | "guest";
type UserStatus = "active" | "inactive" | "banned";
type UserType = "admin" | "user" | "guest";



//  inter face 


interface User {
    name: string;
    age: number;
    isEmployed: boolean;
}
interface Product { 
    name: string;
    price: number;
    inStock: boolean;
}
interface Car { 

    make: string;
    model: string;
    year: number;
}
interface Animal {      

    species: string;
    age: number;
    isEndangered: boolean;
}
interface Book {    
    title: string;
    name: string;
    author: string;
    ISBN: string;
    publishedYear: number;
    genre: string;
    isAvailable: boolean;
    rating: number;
    reviews: number;
}

