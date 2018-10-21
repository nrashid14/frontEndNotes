// global scope 
var a= 1;
let b= 2;
const c= 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('function scope: ',a,b,c);
}
test();


if(true){
    var a = 3;
    let b = 6;
    const c = 9;
    console.log('Block scope: ',a,b,c);
}

console.log('Global Scope: ', a,b,c);


