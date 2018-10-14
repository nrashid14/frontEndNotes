const person = {
    firstName:"Noman",
    lastName: "Rashid",
    address: {
        city: "Chicago",
        state: "IL"
    },
    Age: 24,
    BirthYear: () => {
        return 1987
    }
}

let val;

val = person;

val = person.firstName;
val = person.address.city;



const person2 = {
    age: 24,
    getBirthYear: function() {
        return 2018 - this.age;
    }
}
val = person2.getBirthYear();

const person3 = {
    age: 24,
    getBirthYear: () => {
        return 2018 - this.age;
    }
}
val = person3.getBirthYear();

const people = [
    {name: 'Noman', age: 50},
    {name: 'Rob', age: 88},
    {name: 'Bob', age: 48},
    {name: 'Stan', age: 24},
    {name: 'Cam', age: 60},
    {name: 'Aaron', age: 40},
    {name: 'Rodgers', age: 37}
]
for (let i=0; i < people.length; i++){
    console.log(people[i].name);    
}

let val;

val = today;
const today = new Date();



console.log(val);
