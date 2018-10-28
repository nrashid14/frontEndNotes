console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

taskTitle.style.background = 'yellow';
taskTitle.style.color = 'purple';
taskTitle.style.padding = '5px';

taskTitle.textContent = 'Task lists';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<h2>H2 Tasks</h2>';

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.background = 'cyan';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(4)').style.color = 'orange';

document.querySelector('li:nth-of-type(even)').style.background = 'grey';
document.querySelector('li:nth-of-type(odd)').style.background = 'cyan';

