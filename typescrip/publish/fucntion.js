"use strict";
// function 
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
// function expression
const getFullName2 = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};
//  arrow function 
//  variable name should be same as function name  () => {}  one variable   name => {}   //   name => 
const getFullName3 = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
const signleLineFunc = (names) => `Hello  ` + names; // single line function
const multiLineFunc = (names) => {
    console.log("Hello " + names);
    return names;
}; // multi line function
