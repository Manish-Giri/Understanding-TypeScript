/**
 * Created by manishgiri on 10/31/16.
 */
namespace section5 {

    //classes
    class Person {
        name: string;
        private type: string; //private members are accessible only within the class
        protected age: number; //private members are accessible from within class and subclass

        //constructor is optional in TS
        constructor(name: string, public userName: string) {
            //userName -> this is another way of assining properties through constructor, without having to first declare
            //the property and then assign value through constructor
            this.name = name;
        }

    }

    let person1 = new Person("John Doe", "jdoe");
    console.log(person1);
}