"use strict";
let names = "kamal";
let age = 23;
let isMarried = false;
console.log("name " + names + " age " + age + " isMarried " + isMarried);
/* public  class Person {
    public string Name { get; set; }

    public int AddNumber(int a, int b){
    
        return a + b;}

}

*/
class Person {
    addNumer(a, b) {
        return a + b;
    }
}
let person = new Person();
person.names = "kamal";
person.age = 23;
person.isMarried = false;
person.addNumer(2, 3);
