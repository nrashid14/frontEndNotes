let firstName = "Noman";
let lastName = "Rashid";
fullName = `${firstName} ${lastName}`;
console.log(fullName);

let example = 6.5;
console.log(Boolean(example));

let example1 = {
    firstName: "Noman",
    lastName: "Rashid",
    address: {
        City: "Chicago",
        State: "IL"
    },
    Age: 24,
    BirthYear: () => {
        return 1987
    }
};
console.log(Object.values(example1));
console.log(Object.keys(example1));
console.log(example1.hasOwnProperty("firstName"));

let example2 = 5 * 3;
console.log(example2);

let example3 = 10;
let example4 = 15;
console.log(example3 >= example4);

let example10 = 5;

if (example10 === 5 && example10 <= 5) {
    console.log('Runs');
} else if (example10 == 10) {
    console.log('else if');
} else {
    console.log('else');
};

let total = 0;

for (let i = 0; i < 5; i++) { // starts off with 0/ until it reaches the last number that is less than 5/ increase by 1 every iteration
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    total += i;               // adds all the values together
}

console.log(total);

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];
for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];


//console.log(numArray[i]);
console.log(total);
}

let count = 0;

while (count < 100) {
    count++;
}

console.log(count);