const numbers = [43, 56, 33, 23, 44, 34];

const numbers2 = new Array(22, 45, 12, 37, 87);

const fruits = ['Apple', 'Banana', 'Peaches', 'Orange', 'Pear']

const mixedArray = [22, 'String', true, undefined, null, {a:1, b:'two'}, new Date()];

let val; 

val = numbers.length; // what is the length of the index
val = Array.isArray(numbers); // is it an array?
val = numbers[3]; // display the 3rd index

numbers[3] = 100; // change the 3rd index to 100

val = numbers.indexOf(43); // find the index of a number

numbers.unshift(120); // add to the front
numbers.shift(120); // remove from the front
numbers.push(250); // add to the end
numbers.pop(); // remove from the end
numbers.splice(1,3); // remove specific numbers with index
numbers.reverse(); // reverse the order of an array

val = numbers.concat(numbers2); // combine arrays 

val = fruits.sort(); // sort alphabetically
val = numbers.sort(); // sort numerically by the first digit ONLY
val = numbers.sort( (min,max) => {
return min-max;
} ); // sort numericaly for numbers as a whole 

var under50 = (num) => {
    return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(numbers2);
console.log(fruits);
console.log(mixedArray);
console.log(val);

