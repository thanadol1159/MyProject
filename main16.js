// import { students } from "./students.js"
// import { lecturers } from "./lecturers.js"
// const getbtn = document.getElementById('buttonPanel')
// const btn1 = getbtn.children[0]
// const btn2 = getbtn.children[1]

// let handler = 
//     ('click',(event)=>{
//         alert(`hello, divparent!
//         event target::: ${event.target},
//         event target::: ${event.target.id},
//         event type: ${event.type},
//         event current target:${event.currentTarget}
//         event phase:: ${event.eventPhase}`)
//     })

// let re = function(){ul.textContent ='erhre'}
// btn1.addEventListener("click",handler) 
// btn2.removeEventListener("click",re) 



// getbtn.addEventListener('click',(event)=>{
//     alert(`hello, divparent!
//     event target::: ${event.target},
//     event target::: ${event.target.id},
//     event type: ${event.type},
//     event current target:${event.currentTarget}
//     event phase:: ${event.eventPhase}`)
// })


// console.log(students);
// const studentHandler =()=>{
//     ul.textContent = ''
//     for (let i = 0; i < students.length; i++) {
//     const li  = document.createElement('li')
//     li.textContent = `ID: ${students[i].id}, name: ${students[i].name}`
//     ul.appendChild(li)    
//     }
// }
// const lecHandler =()=>{
//     ul.textContent = ''
//     for (let i = 0; i < lecturers.length; i++) {
//     const li  = document.createElement('li')
//     li.textContent = `ID: ${lecturers[i].id}, name: ${lecturers[i].name}`
//     ul.appendChild(li)    
//     }
// }

// const list = (event)=>{
//     const item = event.target.id === '1' ? students : lecturers
//     console.log(item);
//     const ul  = document.querySelector('ul')
//     ul.textContent = ''
//     for (let i = 0; i < item.length; i++) {
//         const li  = document.createElement('li')
//         let value = ''
//         for (const key in item[i]) {
//                 value = value+`${key}: ${item[i][key]}`
                
//             }
//             li.textContent = value
//           ul.appendChild(li)   
//      }
    
    
// }
// const list = (items) => {
//     const ulParentElement = document.querySelector('ul')
//     ulParentElement.textContent = ''   
//     for (let i = 0; i < items.length; i++) {
//         const liElement = document.createElement('li')
//         let textValue = ''        
//         for (const key in items[i]) {
//             textValue = textValue + `${key}: ${items[i][key]} `
//         }
//         liElement.textContent = textValue    
//         ulParentElement.appendChild(liElement)
//     }
// }
// const studentHandler =()=>{list(students)}
// const lecHandler = () =>{list(lecturers)}
// btn1.addEventListener('click', list)
// btn2.addEventListener('click',list)

const input = document.getElementById('value')
const p = document.getElementById('display')
// input.addEventListener('keypress',(event)=>{
//     if (event.key === 'Enter') {
//         p.textContent=input.value
//     }
// })
input.addEventListener('input',()=>{
    p.textContent =  input.value
})
