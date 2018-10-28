let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello World';

val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;





console.log(val);