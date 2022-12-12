const newliElementNode = document.createElement("li");
newliElementNode.setAttribute("class", "createdElement");
newliElementNode.innerText = "Create newTextNode";

const newli2ElementNode = document.createElement("li");
newli2ElementNode.setAttribute("class", "INT202");
newli2ElementNode.innerText = "INT202-Server Side I";
const targetDiv = document.getElementById("courseList");
targetDiv.getElementsByTagName("ul")[0].appendChild(newliElementNode);

// // use when don't know id or class name
// // select <ul> node
// const bodyChildrenNodes = document.body.children; //array like
// const divChildNode = bodyChildrenNodes[1];
// const ulChildNode = divChildNode.children[0];
// // const ulChildNode = divChildNode.childrenfirstElementChild;

// //append <li> to <ul> parent nodes
// ulChildNode.appendChild(newliElementNode);
// ulChildNode.appendChild(newli2ElementNode);

// function addElement(desc) {
//   const newli2ElementNode = document.createElement("li");
//   newli2ElementNode.setAttribute("class", "INT202");
//   newli2ElementNode.innerText = `${desc}`;
//   const bodyChildrenNodes = document.body.children; //array like
//   const divChildNode = bodyChildrenNodes[1];
//   const ulChildNode = divChildNode.children[0];
//   return ulChildNode.appendChild(newli2ElementNode);
// }
// addElement("hello");
// addElement("hello2");

//------------Selecting Elements--------------
// HtmlCollection -> getElementById
const divByID = document.getElementById("summary");
console.log(divByID);
const ulByID = document.getElementById("courseList");
console.log(ulByID);
// HtmlCollection -> getElementByClassName
const nodeByClassName = document.getElementsByClassName("database");
console.log(nodeByClassName);

// NodeList -> querySelector (return first descendant)
const queryByClass = document.querySelector(".database");
console.log(queryByClass);
// By ID attribute
const queryById = document.querySelector("#summary");
console.log(queryById);
// NodeList -> querySelector (return all results)
const queryAllByClass = document.querySelectorAll(".database");
console.log(queryAllByClass);

// const queryAllByTagName = document.querySelectorAll("li[class=devops]");
const queryAllByTagName = document.querySelectorAll("li.devops");
console.log(queryAllByTagName);

//---------------Manipulating Nodes----------------------
// 1.Insert Before
// Create Text Node
const pNewMode = document.createElement("p");
pNewMode.setAttribute("class", "devops");
pNewMode.innerText = "2";
// get DivParentsNode
const divParentNode = document.getElementById("summary");
// get ClidrenNode from DivParentsNode
const divChildrenNode = divParentNode.children;
// get <p class="dev">2</p>
const referNode = divChildrenNode[1];
console.log(referNode);
//insert before 3.<p class="dev">2</p>
divParentNode.insertBefore(pNewMode, referNode);

// 2. Replace
// Create a new li node
const newliNode = document.createElement("li");
newliNode.textContent = "Ajarn Saichon Jaiyen";
// select parent node <ul class="lecturers"></ul>
const ulParent = document.querySelector(".lecturers");
//select old node to replace <li>Ajarn Pichet Limvajiranan</li>
const liOldNode = ulParent.children[1];
// replace new node
ulParent.replaceChild(newliNode, liOldNode);

// 3.Remove Node
//select a delete node
const deleteNode = ulParent.lastElementChild;
ulParent.removeChild(deleteNode);
// <li>Ajarn Umaporn Supasitthimethee</li> will be removed

//--------------System Dialog----------------
//1.Who are you?, user enter her/his name (prompt)
//2. confirm your name (confirm)
//3.greeting message (alert)

const yourname = prompt("Who are you?", "Please enter your name");
if (yourname === null) {
  alert("Hello, Guest");
} else {
  const isConfirmName = confirm(`Are you ${yourname}?`);
  isConfirmName ? alert(`hello,${yourname}!`) : alert("You are Guest");
}
