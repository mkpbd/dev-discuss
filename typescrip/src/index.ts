let names : string = "kamal";

let age : number = 23;

let isMarried : boolean = false;


console.log("name "+ names + " age " + age + " isMarried " + isMarried);



/* public  class Person {
    public string Name { get; set; }

    public int AddNumber(int a, int b){
    
        return a + b;}

}

*/


class Person { 
     names! : string;
        age! : number;
        isMarried! : boolean;


     public   addNumer(a: number, b: number): number {
            return a + b;
        }


}

let person = new Person();
person.names = "kamal";
person.age = 23;
person.isMarried = false;

person.addNumer(2, 3);

