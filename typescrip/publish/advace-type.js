"use strict";
// Array 
let numberArr = [1, 2, 3, 4, 5];
let stringArr = ["apple", "banana", "cherry"];
let booleanArr = [true, false, true, false];
let mixedArrary = ["John", 30, "Doe", 25];
let tupleArrary = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArrary2 = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArrary3 = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
// tuple 
let arrayTuple = ["John", 30, true];
let arrayTuple2 = ["John", 30, true];
let arrayTuple3 = ["John", 30, true];
// union types
let unionType = "John";
let unionType2 = 30;
let unionType3 = "John";
let unionType4 = 30;
let unionType5 = "John";
var colors;
(function (colors) {
    colors["RED"] = "red";
    colors["GREEN"] = "green";
    colors["BLUE"] = "blue";
    colors["YELLOW"] = "yellow";
    colors["ORANGE"] = "orange";
    colors["PURPLE"] = "purple";
    colors["PINK"] = "pink";
    colors["BROWN"] = "brown";
    colors["BLACK"] = "black";
    colors["WHITE"] = "white";
})(colors || (colors = {}));
;
let c = colors.RED;
let c2 = colors.GREEN;
// any types
let anyType = "John";
let anyType2 = 30;
let anyType3 = true;
let anyType4 = null;
// void types
function voidFunction() {
    console.log("This function does not return anything.");
}
function voidFunction2() {
    console.log("This function does not return anything.");
}
/// null and undefined types
let nullType = null;
let undefinedType = undefined;
/// never types 
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("This function will run forever.");
    }
}
/// object types
let objectType = {
    name: "John",
    age: 30,
    isEmployed: true
};
let objectType2 = {
    name: "John",
    age: 30,
    isEmployed: true
};
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error: Argument of type 'number' is not assignable to parameter of type 'object | null'.
