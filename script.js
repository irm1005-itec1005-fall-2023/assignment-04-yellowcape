/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
let todoItems = [];
let counter = 0;

addToDoItem("Make Coffee");
removeToDoItem(0);
//

// Constants
    const appID = "app";
    const headingText = "To do. To done. ✅";

// DOM Elements
    let appContainer = document.getElementById(appID);

//
// Functions
    function addToDoItem(text) {
      let todoItem = { 
        id : counter, 
        text : text, 
        completed: false,
      }
      todoItems.push(todoItem);
      counter = counter + 1;
    }

    
    function removeToDoItem(todoId) {
      // Implement the logic to add a task here
      for (let index = 0; index < todoItems.length; index++) 
      {
        if (todoItems[index].id === todoId) 
        {
          todoItems.splice(index, 1);
          break;
        }
      }
    }


    function markToDoItemAsCompleted(todoId) {
      // Implement the logic to mark a task as completed here
     for (let index = 0; index < todoItems.length; index++) 
      {
        if (todoItems[index].id === todoId) 
        {
          todoItems[index].completed = true;
          break;
        }
      }
    }
    markToDoItemAsCompleted(1);
    console.log(todoItems[index]);
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();