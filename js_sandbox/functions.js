function greet1(){
    console.log('Hello');
}
greet1();

function greet2() { 
    return 'Hello return keyword';
}
console.log(greet2());


function greet3(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet3());
console.log(greet3('John', 'Smith'));

function greet4(firstName, lastName){
    if(typeof firstName === 'undefined'){firstName = 'John'}
    if(typeof lastName === 'undefined'){lastName = 'Smith'}
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet4());



const square = function(x){
    return x*x;
}
console.log(square(8));


(function(){
    console.log('IIFE ran....');
})();

(function(name){
    console.log('Hello ' + name);
})('IIFE with param');

const todo = {
    add: function(){
        console.log('add todo');
    },
    edit: function(id = 'default id'){
        console.log(`Edit todo ${id}`);
    }
}
todo.add();
todo.edit(22);