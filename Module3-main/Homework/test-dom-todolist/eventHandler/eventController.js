import { todoManagement } from "../lib/todoManagement.js";
import { todoUserInterface } from "../UI/todoList.js";
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos,
} = todoManagement();

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface();

const addTodoHandler = () => {
  const todoItem = document.querySelector("input").value; // select tag <input> to listen events
  if (todoItem.trim().length !== 0) {
    // check length
    const todoId = addTodo(todoItem); // return ID of todo item
    showTodoItem(todoId, todoItem); //create Todo form Todolist.js
    addButtonHandler(todoId); // addButon click
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
  }
};

const addButtonHandler = (todoId) => {
  document
    .getElementById(todoId)
    .children[1].addEventListener("click", notDoneButtonHandler, false);
  document
    .getElementById(todoId)
    .children[2].addEventListener("click", removeButtonHandler, false);
  document.querySelector("input").value = "";
};

const notDoneButtonHandler = (event) => {
  const doneButtonFire = event.target;
  setdoneStyle(doneButtonFire);
  setItemToDone(doneButtonFire.parentElement.getAttribute("id"));
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
};

const setdoneStyle = (doneButtonFire) => {
  doneButtonFire.textContent = "Done";
  doneButtonFire.style = "background-color: green; color: white";
};

const removeButtonHandler = (event) => {
  const removeButtonFire = event.target;
  const removeId = removeButtonFire.parentElement.getAttribute("id");
  removeTodoItem(removeId);
  removeTodo(Number(removeId));
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfDone());
};

const beforeUnloadHandler = (event) => {
  event.preventDefault();
  localStorage.setItem("todos", JSON.stringify(getTodos()));
};

const loadHandler = () => {
  const yourTodos = localStorage.getItem("todos");
  if (yourTodos !== null) {
    //[{"id":1,"description":"Shopping","done":true},{"id":2,"description":"Watch Movie","done":false},{"id":3,"description":"sleep","done":true}]
    loadTodos(JSON.parse(yourTodos));
    getTodos().forEach((todo) => {
      showTodoItem(todo.id, todo.description);
      addButtonHandler(todo.id);
      if (todo.done) {
        const doneButtonFire = document.getElementById(todo.id).children[1];
        setdoneStyle(doneButtonFire);
      }
    });
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
  }
};

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  beforeUnloadHandler,
  loadHandler,
};
