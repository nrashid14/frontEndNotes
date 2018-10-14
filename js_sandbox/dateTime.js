let val;


const today = new Date();
val = today;

let birthday = new Date('9-9-1993 11:25:00');
birthday = new Date('September 15, 1991')

val = birthday;

val = today.getDate();
val = today.getMonth();
val = today.getDay();


console.log(val);