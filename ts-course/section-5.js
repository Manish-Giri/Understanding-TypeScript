var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by manishgiri on 10/31/16.
 */
var section5;
(function (section5) {
    //classes
    var Person = (function () {
        //constructor is optional in TS
        function Person(name, userName) {
            this.userName = userName;
            this.age = 23; //private members are accessible from within class and subclass
            //userName -> this is another way of assining properties through constructor, without having to first declare
            //the property and then assign value through constructor
            this.name = name;
        }
        Person.prototype.printAge = function () {
            console.log("Age = " + this.age);
        };
        Person.prototype.setType = function (type) {
            this.type = type;
            console.log("Type = " + this.type);
        };
        return Person;
    }());
    var person1 = new Person("John Doe", "jdoe");
    console.log(person1);
    person1.printAge();
    person1.setType('Cool guy');
    console.log(person1);
    var SubPerson = (function (_super) {
        __extends(SubPerson, _super);
        function SubPerson() {
            _super.apply(this, arguments);
            this.name = "Max";
        }
        return SubPerson;
    }(Person));
    var subPerson1 = new SubPerson("Anna", 'maxs');
    console.log(subPerson1);
})(section5 || (section5 = {}));
