function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const todoItem = document.createElement("div");
    todoItem.setAttribute("id", newId);
    // set the description
    const todoDescription = document.createElement("p");
    todoDescription.textContent = newDescription;
    // set button
    const todoNotDone = document.createElement("button");
    todoNotDone.innerText = "Not Done";
    const todoRemove = document.createElement("button");
    todoRemove.innerText = "remove";
    // append child element
    todoItem.appendChild(todoDescription);
    todoItem.appendChild(todoNotDone);
    todoItem.appendChild(todoRemove);
    //get the element listTodo
    const todoList = document.getElementById("listTodo");
    //append todoItem to the todoList element
    todoList.appendChild(todoItem);
  }

  function showNumberOfDone(numberOfDone) {
    const showNumberOfDone = document.getElementById("done");
    showNumberOfDone.textContent = `Number of Done:${numberOfDone}`;
  }

  function showNumberOfNotDone(numberOfNotDone) {
    const showNumberOfNotDone = document.getElementById("notDone");
    showNumberOfNotDone.textContent = `Number of Not Done:${numberOfNotDone}`;
  }

  function removeTodoItem(removeId) {
    const removeTodo = document.getElementById(removeId);
    removeTodo.parentElement.removeChild(removeTodo);
  }
  return {
    showTodoItem,
    showNumberOfDone,
    showNumberOfNotDone,
    removeTodoItem,
  };
}

export { todoUserInterface };
// module.exports = todoUserInterface;
