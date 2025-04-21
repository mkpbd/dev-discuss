"use strict";
// string 
let fullName = "John Doe";
// number
let age = 30;
// boolean
let isEmployed = true;
// any 
// let , var , const 
// array 
const nuymberArray = [1, 2, 3, 4, 5];
const numberArray2 = [1, 2, 3, 4, 5];
// tuple
const tuple = ["John", 30];
// any 
let anyValues = "Hello";
anyValues = 42; // Now it's a number
anyValues = true; // Now it's a boolean  
// never 
let a;
let und = undefined;
let nul = null;
const obj = {
    name: "John",
    age: 30,
    isEmployed: true
};
let fun = () => {
    console.log("Hello, World!");
};
// string 
let firstName = "mostofa ";
let middleName = "kamal";
let lastName = "Passa";
// Number 
let price = 100;
let discount = 0.1;
let finalPrice = price - (price * discount);
//Boolean 
let isAvailable = true;
let isActive = false;
// Special Types 
let anyValue = "Hello, World!";
anyValue = 42; // Now it's a number
anyValue = true; // Now it's a boolean
anyValue = null; // Now it's null
anyValue = undefined; // Now it's undefined
anyValue = {}; // Now it's an object
anyValue = []; // Now it's an array
anyValue = () => { }; // Now it's a function
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
let userInput = "Hello, World!";
userInput = 42; // Now it's a number
userInput = true; // Now it's a boolean 
// never 
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
// Object 
let user = {
    name: "John Doe",
    age: 30,
    isEmployed: true
};
// array 
let numbers = [1, 2, 3, 4, 5];
let strings = ["apple", "banana", "cherry"];
let namesArr = ["John", "Jane", "Doe"];
let mixedArr = ["John", 30, "Doe", 25];
let tupleArr = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArr2 = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArr3 = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArr4 = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArr5 = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
// Function Types 
function addNumberAndReturn(num1, num2) {
    return num1 + num2;
}
// Tuple  types
let personTupple = ["John", 30, true];
let personTupple2 = ["John", 30, true];
// Enum types
var color;
(function (color) {
    color["Red"] = "RED";
    color["Green"] = "GREEN";
    color["Blue"] = "BLUE";
})(color || (color = {}));
// union Types
let id = "12345";
id = 12345; // Now it's a number
id = "67890"; // Now it's a string
// Literal Types 
let discounts = 10;
discounts = 20; // Now it's a number
let statusForMessage = "success";
statusForMessage = "error"; // Now it's a string
statusForMessage = "loading"; // Now it's a string
function printUser(user) {
    console.log(`Name: ${user.name}, Email: ${user.email}, Employed: ${user.id}`);
}
// union types 
let userId;
userId = "12345"; // Now it's a string
userId = 12345; // Now it's a number
userId = null; // Now it's null
let productShipping = "standard";
productShipping = "express"; // Now it's a string
let proOjb = {
    name: "John",
    age: 30,
    isEmployed: true
};
let objectType1 = {
    name: "John",
    age: 30,
    isEmployed: true
};
proOjb.age = 35; // Now it's a number
proOjb.name = "Doe"; // Now it's a string
// let person = new  person ();
// var ab = objectType1 as any;
// ab.name = "Doe"; // Now it's a string
//  List<in> number = new List<in>();
//  number.Add(1);
//  number.Add(2);
// number.remove(1);
//  numbArray 
let numbArray = [4, 5];
// tack 
numbArray.push(6);
// numbArray.pop();
/// queue 
// numbArray.shift();
// numbArray.unshift(10);
console.log(numbArray);
const userObject = {
    name: function () {
        return "John Doe";
    },
    age: function () {
        return 30;
    },
    array: [2, 2, 3, 4, 54, 6, 7, 8, 89, 5],
    obj: {
        name: "John",
        age: 3330,
        isEmployed: true
    }
};
console.log(userObject.name());
console.log(userObject.age());
console.log(userObject.obj.age);
// public int Name {get; set;}
let userTypeObject = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};
// only  object type define first then  assign value
let bookType;
bookType = {
    title: "The Great Gatsby",
    authero: "F. Scott Fitzgerald",
};
bookType.ISBN = "9780743273565"; // Optional property can be added later
bookType.title = "abc"; // Optional property can be added later
console.log(bookType.ISBN); // Optional property can be added later
console.log(bookType.title); // Optional property can be added later
function UserInfo(user) {
    return user;
}
