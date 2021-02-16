class Person {
    constructor(name = "Annonumus", age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }

}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGretting(){
        let msg = super.getGretting();
        if (this.hasHomeLocation()){
            msg += ` Im visiting from ${this.homeLocation}`;
        }
        return msg;
    }
}
const me = new Traveler('Tamar Moshe', 31, "Hod-HaSharon");
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());