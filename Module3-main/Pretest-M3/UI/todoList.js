function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const todoList = document.getElementById("listTodo");
    const todoItem = document.createElement("div");
    todoItem.className = "todoItem";
    todoItem.setAttribute("id", newId);

    const todoDesc = document.createElement("p");
    todoDesc.textContent = newDescription;
    todoItem.appendChild(todoDesc);

    const notDoneBtn = document.createElement("button");
    notDoneBtn.textContent = "Not Done";
    todoItem.appendChild(notDoneBtn);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    todoItem.appendChild(removeBtn);
    todoList.appendChild(todoItem);
  }
  function showNumberOfDone(numberOfDone) {
    const doneId = document.getElementById("done");
    doneId.textContent = `Number of Done:${numberOfDone}`;
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const notDoneId = document.getElementById("notDone");
    notDoneId.textContent = `Number of Not Done:${numberOfNotDone}`;
  }
  function removeTodoItem(removeId) {
    const removeTodo = document.getElementById(removeId);
    removeTodo.parentElement.removeChild(removeTodo);
    // removeTodo.remove(removeTodo);
  }
  return {
    showTodoItem,
    showNumberOfDone,
    showNumberOfNotDone,
    removeTodoItem,
  };
}
// module.exports = todoUserInterface;
export { todoUserInterface };
