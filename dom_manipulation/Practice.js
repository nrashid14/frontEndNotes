var odd = document.querySelectorAll("li:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
}

var List = document.querySelector(".collection");
List.parentNode.style.backgroundColor = "#f4f4f4";

var form = document.getElementById("button1");
var itemList = document.getElementById("list-group");

form.addEventListener("click", addItem);
itemList.addEventListener('click', removeItems);

function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("task").value;

  var li = document.createElement("li");
  li.className = "list-group";
  li.appendChild(document.createTextNode(newItem));
  li.className = "collection-item";

  var delete1 = document.createElement("i");
  delete1.className = "fa fa-remove";
  delete1.style.color = "orange";
  delete1.style.cssFloat = "right";
  delete1.style.paddingRight = "23px";
  var delete2 = document.createElement("a");
  delete2.className = "delete-item secondary-content";
  delete2.href = "#";

  

  itemList.appendChild(li);
  li.appendChild(delete1, delete2);

  var odd = document.querySelectorAll("li:nth-child(odd)");

  for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "#f4f4f4";
  }
};



  function removeItems(e){
      if(e.target.classList.contains('clear-tasks btn black')){
          if(confirm('Are you sure you want to remove all items?')){
              var li = document.getElementsByClassName('collection-item');
              itemList.removeChild(li);
          }
      }

  }



