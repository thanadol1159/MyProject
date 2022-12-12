// import { Todo } from "./lib/todo.js";
import { todoManagement } from "./lib/todoManagement.js";
import { todoUserInterface } from "./UI/todoList.js";
import {
  addTodoHandler,
  loadHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  beforeUnloadHandler,
} from "./eventHandler/eventController.js";
// const Todo = require("./lib/todo.js");
// const todoManagement = require("./lib/todoManagement");
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
// } = todoManagement();
// const { showTodoItem, showNumberOfDone, showNumberOfNotDone } =
//   todoUserInterface();
window.addEventListener("load", () => {
  loadHandler();
});
window.addEventListener("beforeunload", (event) => {
  beforeUnloadHandler(event);
});
const addButton = document.getElementById("addBtn");
addButton.addEventListener("click", () => addTodoHandler());

const inputTodo = document.querySelector("input");
inputTodo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addTodoHandler();
});

// addTodo("Buy rice");
// addTodo("Buy cookies");
// addTodo("Do Homework");
// console.log(getTodos()[0]);

// getTodos().forEach((todo, i) =>
//   showTodoItem(getTodos()[i].id, getTodos()[i].description)
// );
// showNumberOfDone(getNumberOfDone());
// showNumberOfNotDone(getNumberOfNotDone());
// showTodoItem(getTodos()[0].id, getTodos()[0].description);
