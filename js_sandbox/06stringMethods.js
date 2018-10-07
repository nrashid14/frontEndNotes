const firstName = 'William'
const lastName = 'Johnson'
const age = 48;

const str = 'Hello I am a Dev'
const tags = 'web-design,development,programming,sports'

let val;

val = firstName + lastName;
val = firstName + ' ' + lastName;

val = 'Hello, my name is ' + firstName + '. And I am ' + age + ' years old'

val = 'Noman ';
val += 'Rashid'

val = 'I\'ve been Sipping on jin and juice';
val = "I've been Sipping on jin and juice";

val = firstName.length;

val = firstName.concat(' ', lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

val = firstName.indexOf('l');

val = firstName.charAt('2');

val = firstName.substring(0,4);

val = firstName.slice(0,4);

val = str.split(' ');
val = tags.split(',');

val = str.replace('Dev','Developer')

val = str.includes('Hello');

console.log(val);