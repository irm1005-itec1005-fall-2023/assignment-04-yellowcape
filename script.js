let toDoItems = [];
let removedItems = [];
let counter = 0;
let toDoForm = document.getElementById("todo-form");
let toDoList = document.getElementById("todo-inputted-items-list");
let toDoInput = document.getElementById("todo-input");

addToDoItem("");
removeToDoItem(0);

toDoForm.addEventListener("submit", handleSubmitForm)

    const appID = "app";

    let appContainer = document.getElementById(appID);

    function handleSubmitForm(event) {
      event.preventDefault();
      addToDoItem(toDoInput.value);
      toDoForm.reset();
      renderData();
    }

      function renderData() {
        console.log("Render Data", toDoItems);
        toDoList.innerHTML = "";

        for (let index = 0; index < toDoItems.length; index++) {
        let listItemContainer = document.createElement("div");

        listItemContainer.classList.add("list-item-container");

          let tempListItem = document.createElement("li");
          tempListItem.textContent = toDoItems[index].text;


          let tempButton = document.createElement("button");
           tempButton.textContent = "X";
           tempButton.dataset.super = index.toString();

          tempListItem.classList.add("custom-list-item")
          tempButton.classList.add("custom-button");

          tempButton.addEventListener("click", function(event) {
            console.log("You clicked me");
            console.log("You clicked on", event.target.dataset.super);
            let indexToDelete = parseInt(event.target.dataset.super, 10);

            removedItems.push(toDoItems[indexToDelete]);

            toDoItems.splice(indexToDelete, 1);
            renderData();

            renderRemovedItems();
          });

          listItemContainer.appendChild(tempListItem);
          listItemContainer.appendChild(tempButton);

          toDoList.appendChild(listItemContainer);
        }
      }


    function addToDoItem(text) {
      if (text !== "") {
      let todoItem = { 
        id : counter, 
        text : text, 
        completed : false,
      }
      toDoItems.push(todoItem);
      counter++;
     }
    } 


    function removeToDoItem(todoId) {
      for (let index = 0; index < toDoItems.length; index++) 
      {
        if (toDoItems[index].id === todoId) 
        {
          toDoItems.splice(index, 1);
          break;
        }
      }
    }

    function markToDoItemAsCompleted(todoId) {
      for (let index = 0; index < toDoItems.length; index++) {
        if (toDoItems[index].id === todoId) {
          toDoItems[index].completed = true;
          removedItems.push(toDoItems[index]);
          toDoItems.splice(index, 1);
          renderRemovedItems();
          break;
        }
      }
    }
          markToDoItemAsCompleted(1);
          console.log(toDoItems);
        
          function renderRemovedItems() {
            let removedItemsList = document.getElementById("completed-list");
            removedItemsList.innerHTML = "";

            for (let index = 0; index < removedItems.length; index++) {
              let listItemContainer = document.createElement('div');
              listItemContainer.classList.add('list-item-container');
             
              let tempListItem = document.createElement('li');
              tempListItem.textContent = removedItems[index].text;
              tempListItem.classList.add('custom-list-item');

              listItemContainer.appendChild(tempListItem);
              removedItemsList.appendChild(listItemContainer);
            }
          }

function inititialise() {
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }
  
  document.getElementById('clear-completed').addEventListener('click', function() {
    var completedTasks = document.getElementsByClassName('removed-to-dos');
  
    for (var i = completedTasks.length - 1; i >= 0; i--) {
      completedTasks[i].remove();
      removedItems.splice(i, 1);
    }
  });

  console.log("App successfully initialised");
}

inititialise();

// !! Written with assistance from GitHub Co-Pilot !!