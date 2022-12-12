//rootNode
// nodetype = DOCUMENT_NODE(value = 9);

const rootNode = window.document;
console.log(rootNode);

//rootElement
const rootElement = document.documentElement;
console.log(rootElement);

//html's all node types of children nodes
const htmlChildNodes = rootElement.childNodes;
console.log(htmlChildNodes);

// only elements types of html's children nodes
const htmlElementNodes = rootElement.children;
console.log(htmlElementNodes);
console.log(htmlElementNodes.length);
console.log(htmlElementNodes[0]); // array-like
console.log(htmlElementNodes[htmlElementNodes.length - 1]); // array-like

//1.create a new paragraph element
const newPElementNode = document.createElement("p");

//2.create a new attribute
// const newAttributeNode = document.createAttribute("class");
// newAttributeNode.value = "courses"
newPElementNode.setAttribute("class", "courses"); // reduce step 2+4 แต่ไม่สามารถอ้างถึงใหม่ได้อีก

//3.create a new text
// const newTextNode = document.createTextNode("INT201");
// newPElementNode.textContent = "INT201"; // reduce step 3+5
newPElementNode.innerHTML = "<span style='color:red'>INT201</span>"; // reduce step 3+5

//4. add attribute node to its owner tag
// newPElementNode.setAttributeNode(newAttributeNode);

//5. add text node to parent node
// newPElementNode.appendChild(newTextNode);

//6. add a new paragraph to a tree document
const targetDiv = document.getElementById("myApp");
//find a <div id = "myApp" node in the HTML document
targetDiv.appendChild(newPElementNode);

// console.log(targetDiv.nodeType); // 1 (Element node)
// console.log(targetDiv.nodeName); // Div
// console.log(targetDiv.nodeValue); // Null

// console.log(newAttributeNode.nodeType); // 2 (Attribute node)
// console.log(newAttributeNode.nodeName); // class
// console.log(newAttributeNode.nodeValue); // courses

// console.log(newTextNode.nodeType); // 3 (Text node)
// console.log(newTextNode.nodeName); // #Text
// console.log(newTextNode.nodeValue); // INT201

// console.log(rootNode.nodeType); // 9 (Document node)
// console.log(rootNode.nodeName); // #Document
// console.log(rootNode.nodeValue); // Null

console.log(targetDiv.previousElementSibling);
console.log(targetDiv.nextElementSibling);
console.log(targetDiv.parent);
console.log(targetDiv.children);
