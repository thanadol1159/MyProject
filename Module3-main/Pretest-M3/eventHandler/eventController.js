import { todoUserInterface } from "../UI/todoList.js";
import { todoManagement } from "../lib/todoManagement.js";
const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface();
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
} = todoManagement();
const addTodoHandler = () => {
  const todoItem = document.querySelector("input").value;
  if (todoItem.trim().length !== 0) {
    const todoId = addTodo(todoItem);
    showTodoItem(todoId, todoItem);
    addButtonHandler(todoId);
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
  }
};
const addButtonHandler = (todoId) => {
  document
    .getElementById(todoId)
    .childNodes[1].addEventListener("click", notDoneButtonHandler, false);
  document
    .getElementById(todoId)
    .childNodes[2].addEventListener("click", removeButtonHandler, false);
  document.querySelector("input").value = "";
};
const setDoneButton = (doneButtonFire) => {
  doneButtonFire.textContent = "done";
  doneButtonFire.style = "background-color:green; color:white;";
};
const notDoneButtonHandler = (event) => {
  const doneButtonFire = event.target;
  setDoneButton(doneButtonFire);
  setItemToDone(doneButtonFire.parentElement.getAttribute("id"));
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
};
const removeButtonHandler = (event) => {
  const removeButtonFire = event.target;
  const removeId = removeButtonFire.parentElement.getAttribute("id");
  removeTodo(Number(removeId));
  removeTodoItem(removeId);
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
};
export { addTodoHandler, notDoneButtonHandler, removeButtonHandler };
