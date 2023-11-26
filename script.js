/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
let toDoItems = [];
let removedItems = [];
let counter = 0;
let toDoForm = document.getElementById("todo-form");
let toDoList = document.getElementById("todo-inputted-items-list");
let toDoInput = document.getElementById("todo-input");

addToDoItem("");
removeToDoItem(0);
//

//Handlding the form submission
toDoForm.addEventListener("submit", handleSubmitForm)

// Constants
    const appID = "app";

// DOM Elements
    let appContainer = document.getElementById(appID);

//
// Functions
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

          listItemContainer.classList.add("list-item-container")
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
        completed: false,
      }
      toDoItems.push(todoItem);
      counter++;
     }
    } 


    function removeToDoItem(todoId) {
      // Implement the logic to add a task here
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

        /*  function clearCompletedTasks() {
            for (let index = 0; index < toDoItems.length; index++) {
              if (toDoItems[index].completed === true) {
                toDoItems.splice(index, 1);
              }
            }
          }
          */

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }
  

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();

// DON'T FOGET TO CITE GITHUB CO-PILOT!!