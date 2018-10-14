/*


*/
const con = 200;

if(con == 100) {
console.log('Correct');
} else {
console.log('Incorrect');
}

if(con > 100) {
console.log('Con is GREATER than 100');
} else {
console.log('Con is LESS than 100');
}

if(con == 100) {
console.log('Correct');
} else if(con < 100) {
console.log('Incorrect');
} else {
    console.log(`your condition is ${con}`);
}

const name = 'Noman';
const age = 24;

if(age>0 && age<12) {
    console.log(` ${name} is child`);
 } else if(age>=13 && age<=19) {
    console.log(`${name} is a teenager`);
 } else {
     console.log(`${name} is an adult`)
 }



