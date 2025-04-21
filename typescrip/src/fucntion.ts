
// function 

function  getFullName( firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}


// function expression

const getFullName2 = function (firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

//  arrow function 

//  variable name should be same as function name  () => {}  one variable   name => {}   //   name => 
const getFullName3 = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
}


const signleLineFunc = (names : string ) => `Hello  ` + names; // single line function

const multiLineFunc = (names : string) => {
    console.log("Hello " + names);
    return names;
} // multi line function


