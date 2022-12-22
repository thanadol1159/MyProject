// const li = document.createElement('li')
// li.setAttribute('class','developer')
// li.textContent = 'INT202 server side I'
// li.append(' (nice)')
// const ul = document.querySelector('ul')
// ul.appendChild(li)
// const li1 = document.getElementsByTagName('li')
// console.log(li1)
// console.log(li1.length)
// console.log(li1);
// Array.from(li1).forEach((e) => console.log(e))

// const dev = document.getElementsByClassName('developer')
// console.log(dev);

// const ultag = document.getElementsByTagName('ul')
// const ulNOde = ultag[0]
// const li = document.createElement('li')
// li.setAttribute('class', 'devaloper')
// li.textContent = 'INT200'

// ulNOde.appendChild(li)
// const refli = ulNOde.children[2]

// ulNOde.insertBefore(li,refli)

const getid = document.getElementById('instructors')
const getp = getid.children[1]
getp.textContent = 'aj.saichon'

const deleteNOde = getid.lastElementChild
getid.removeChild(deleteNOde)