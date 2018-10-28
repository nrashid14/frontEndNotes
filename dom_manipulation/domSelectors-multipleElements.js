console.log(document.getElementsByClassName('fa fa-remove'));

const listItems = document.querySelector('ul')
.getElementsByClassName('collection-item');
console.log(listItems);



let lis = document.getElementsByTagName('li');
console.log(lis);
lis[0].style.color = 'blue';
lis[2].textContent = 'Tag Name';

lis = Array.from(lis);
lis.reverse();

lis.forEach(function(li){
    console.log(li.className);
})

lis.forEach(function(li){
    li.textContent = 'Hello';
});

console.log(lis);


const items = document.querySelectorAll('ul.collection li.collection-item')
console.log(items)

items.forEach(function(item, index){
    item.textContent = `${index}: Hi Noman`;
});

const liOdd = document.querySelectorAll('li:nth-child(even)');
const liEven = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(function(li){
    li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'yellow'
};

