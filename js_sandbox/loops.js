/*Used to run the same block of code using diff values each time 
1) for loops 
    - takes in 3 parameters, seperated by semi colons
2) while loops
3) do while loops

*/

for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let i = 0; i < 10; i++){
    if(i===5){
        console.log(`${i} is my favorite number`);
        continue;
    }
    console.log('number ' + i);
}


let i = 0;

while (i < 10) {
    console.log('while loop' + i);
    i++;
}

let e =0;
do {
    console.log('do while loop' + e)
    e++;
}
while(e<10);



const cars = ['Ford', 'Nissan', 'Honda', 'Toyota'];
for ( let i=0; i<cars.length; i++){
    console.log(cars[i]);
}

cars.forEach(function(car , index, theEntireArray){
    console.log('foreach ' + car);
    
    
});


const users = [
    {id:1, name: 'Noman'},
    {id:2, name: 'Eshan'},
    {id:3, name: 'Sameer'},
    {id:4, name: 'Rashid'},
    {id:5, name: 'Paul'},
    {id:6, name: 'Lance'},
    {id:7, name: 'Pam'},
    {id:8, name: 'Sam'},
]

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);




const user = {
    firstName: 'Noman',
    lastName: 'Rashid',
    age: 24,
    decentHumanBeing: false
}
for(let x in user){
    console.log(x);
    console.log(user[x]);

}