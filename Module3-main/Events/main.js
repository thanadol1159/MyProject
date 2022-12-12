import { students } from "./data/students.js";
import { lecturers } from "./data/lecturers.js";

console.log(students);
console.log(lecturers);

const divButtonPanel = document.getElementById("buttonPanel");
console.log(divButtonPanel);

const studentsButton = divButtonPanel.children[0];
console.log(studentsButton);

const lecturersButton = divButtonPanel.children[1];
console.log(lecturersButton);

// // add event handlers function by using anonymous function
// studentsButton.addEventListener(
//   "click",
//   () => {
//     alert("Hello Students Button !!");
//   },
//   false
// );

// function studentsButtonHandler() {
//   alert("2nd Hello Students Button !!");
// }
// studentsButton.addEventListener("click", studentsButtonHandler, false);
// studentsButton.removeEventListener("click", studentsButtonHandler, false);

// // function expression (arrow function)
// const divButtonHandler = () => {
//   alert("Hi, Div Button Panel");
// };
// // add event handlers function by using function name
// divButtonPanel.addEventListener("click", divButtonHandler, false);

studentsButton.addEventListener("click", dataButtonHandler, false);
lecturersButton.addEventListener("click", dataButtonHandler, false);

function findStudent(event) {
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.type);
  console.log(event.eventPhase);
  console.log(event.currentTarget);

  dataButtonHandler(students);
}
function findlecturer(e) {
  dataButtonHandler(lecturers);
}

// function findStudent() {
//   //   const divDataList = document.getElementById("dataList");
//   //   const ulDataList = divDataList.children[0];
//   const ulDataList = document.querySelector("ul");
//   ulDataList.innerHTML = ""; // Clear <li> from <ul>
//   x.forEach((element) => {
//     const liNode = document.createElement("li");
//     liNode.setAttribute("class", "students");
//     liNode.textContent = `ID: ${element.id} Name: ${element.name} `;
//     ulDataList.appendChild(liNode);
//   });
// }

// function findlecturers() {
//   const ulDataList = document.querySelector("ul");
//   ulDataList.innerHTML = ""; // Clear <li> from <ul>
//   lecturers.forEach((element) => {
//     const liNode = document.createElement("li");
//     liNode.setAttribute("class", "lecturers");
//     liNode.textContent = `ID: ${element.id} Name: ${element.name} `;
//     ulDataList.appendChild(liNode);
//   });
// }

// function dataButtonHandler(item) {
//   const ulDataList = document.querySelector("ul");
//   ulDataList.innerHTML = ""; // Clear <li> from <ul>
//   item.forEach((element) => {
//     for (const key in element) {
//       const liNode = document.createElement("li");
//       liNode.textContent = `${key} ${element[key]}`;
//       ulDataList.appendChild(liNode);
//     }
//   });
// }

//Event Target
function dataButtonHandler(event) {
  const ulDataList = document.querySelector("ul");
  ulDataList.innerHTML = ""; // Clear <li> from <ul>
  const item = Number(event.target.id) === 1 ? students : lecturers;
  item.forEach((element) => {
    for (const key in element) {
      const liNode = document.createElement("li");
      liNode.textContent = `${key} ${element[key]}`;
      ulDataList.appendChild(liNode);
    }
  });
}

const msg = document.querySelector("#message");
const display = document.querySelector("span");
// msg.addEventListener('input', function () {
//  display.textContent =msg.value
// })
msg.addEventListener("keypress", (event) => {
  //event.keyCode, event.which
  if (event.key === "Enter") {
    findIdLecturers();
    // display.textContent = msg.value;
    msg.value = "";
  }
});
const findIdLecturers = () => {
  const allPeople = [...lecturers, ...students];
  const id = document.querySelector("#message").value;
  const idFind = allPeople.find((lecturers) => lecturers.id === Number(id));
  const display = document.querySelector("span");
  idFind
    ? (display.textContent = `ID: ${idFind.id}, Name: ${idFind.name}`)
    : (display.textContent = `Not Found`);
};
