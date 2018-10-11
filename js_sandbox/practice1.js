let firstName = "Noman";
let lastName = "Rashid";
fullName = `${firstName} ${lastName}`;
console.log(fullName);

let example = 6.5;
console.log(Boolean(example));

let example1 = {
    firstName:"Noman",
    lastName: "Rashid",
    address: {
        City: "Chicago",
        State: "IL"
    },
    Age: 24
};
console.log(Object.values(example1));
console.log(Object.keys(example1));
console.log(example1.hasOwnProperty("firstName"));

let example2 = 5*3;
console.log(example2);

let example3 = 10;
let example4 = 15;
console.log(example3 >= example4);