function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create a new input
    let deleteButton = document.createElement('input');

    // set the input's type to button
    deleteButton.type = "button";

    //add the input's value
    deleteButton.value = "Delete To-Do";

    // set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //delete list item on click of button
    deleteButton.addEventListener('click',event =>{
      newLi.remove();
      //newLi.textContent = '';
      //newLi.innerHTML = '';
    })
  });
}

window.onload = function(){
  onReady();
};
