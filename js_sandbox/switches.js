const color = 'orange';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue')
}

let day;

switch(new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Saturday';
        break;
    case 2:
        day = 'Monday';
        break;
}
console.log(`Today is ${day}`);
