// TYPE CONVERSION
// taking a variable and changing the data type

let val;

val = 555;

val = String(555);
val = String(4+4);

val = String(true);

val = String(new Date());

val = String([1,2,3,4,5])

val = (5).toString();

val = parseInt('100.30');
val = parseFloat('100.35555');

console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));


const first = 'Noman';
const last = 'Rashid';
const sum = first+last;

console.log(sum);
console.log(typeof sum);