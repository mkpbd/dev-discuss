

// Array 


let numberArr : number[] = [1, 2, 3, 4, 5];

let stringArr : string[] = ["apple", "banana", "cherry"];

let booleanArr : boolean[] = [true, false, true, false];

let mixedArrary : (string | number)[] = ["John", 30, "Doe", 25];
let tupleArrary : [string, number][] = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];

let tupleArrary2 : Array<[string, number]> = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];
let tupleArrary3 : [string, number][] = [   
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40]
];



// tuple 

let arrayTuple : [string , number, boolean] = ["John", 30, true];
let arrayTuple2 : [string, number, boolean] = ["John", 30, true];
let arrayTuple3 : [string, number, boolean] = ["John", 30, true];


// union types

let unionType : string | number = "John";
let unionType2 : string | number = 30;
let unionType3 : string | number = "John";
let unionType4 : string | number = 30;
let unionType5 : string | number | boolean | null | undefined | "abc" | 10 = "John";


enum colors { 
    RED = "red",
    GREEN = "green",
    BLUE = "blue",
    YELLOW = "yellow",
    ORANGE = "orange",
    PURPLE = "purple",
    PINK = "pink",
    BROWN = "brown",
    BLACK = "black",
    WHITE = "white"
};

let c : colors = colors.RED;
let c2 : colors = colors.GREEN;


// any types

let anyType : any = "John";
let anyType2 : any = 30;
let anyType3 : any = true;

let anyType4 : any = null;


// void types


function voidFunction() : void {
    console.log("This function does not return anything.");
}

function voidFunction2() : void {
    console.log("This function does not return anything.");
}



/// null and undefined types

let nullType : null = null;
let undefinedType : undefined = undefined;

/// never types 

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("This function will run forever.");
    }
}



/// object types


let objectType : object = {
    name: "John",
    age: 30,
    isEmployed: true
};
let objectType2 : object = {
    name: "John",
    age: 30,
    isEmployed: true
};


declare function getData(): object;
declare function getData2(): object;


declare function create(o: object | null) : void;



create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error: Argument of type 'number' is not assignable to parameter of type 'object | null'.