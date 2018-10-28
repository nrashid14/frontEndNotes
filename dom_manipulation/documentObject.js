/*
properties are attrivutes of the dom
selectors are methods of the dom 


*/


let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length; // 43 tags in html
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;



val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);



scriptsArray.forEach(function(script){
console.log(script);
console.log(script.getAttribute('src'))
});





console.log(val);