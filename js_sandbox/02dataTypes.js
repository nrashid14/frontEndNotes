// PRIMITIVE TYPE
// when we access data, we acces it by its actual value
// strings - text (sequences of characters)
// numbers
// booleans - true/false
// null -empty value
// undefined - variable with no value
// symbols 

const name = 'Noman';

const age = 32;

const hasKids = true;

const car = null;

let gotNothingToSay;

const sym = Symbol();

console.log(typeof name);
console.log(typeof hasKids);
console.log(typeof age);
console.log(typeof car);
console.log(typeof gotNothingToSay);
console.log(typeof sym);

// REFERENCE TYPE
// accessed by reference, not by actual value
// arrays 
// object lierals
// functions
// dates

const hobbies = ['coding', 'reading', 'sport'];
console.log(typeof hobbies);

const address = {
    street: "123 main st",
    city: "chicago",
    state: "IL"
}
console.log(typeof address);
console.log(address);

const today = new Date();
console.log(today);
console.log(typeof today);



