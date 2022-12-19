const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//your student id, firstname, and lastname here
//64130500066 Phutawan Palakavong 
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    let items = getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
    const ulElement = document.querySelector('#app').querySelector('div').querySelector('ul')
    // const ulElement = document.body.children[0].children[1].children[0]
    // console.log(ulElement);

    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild)
    }
    items.forEach(e => {
      const newLiElement = document.createElement('li')
      newLiElement.textContent = `ID:${e.id}, NAME:${e.name}`
      ulElement.appendChild(newLiElement)
    })
    
    
  }
  const pageHandler = (event) => {

    if(event === undefined){
      showItemsOfCurrentPage(1)
      const parentElement = document.querySelector('div')
      const paginationElement = parentElement.children[2]
      const firstPageButton = paginationElement.children[0]
      firstPageButton.style = 'background-color: LightSteelBlue'
    }
    
    const pageBtn = event?.target === undefined ? document.getElementById('app').children[2].firstElementChild : event.target;
    console.log(pageBtn);
    
    const pageId = pageBtn === undefined ? 1 : pageBtn.id
    showItemsOfCurrentPage(pageId)
    
    const parentBtn = document.getElementById('app').children[2]
    console.log(parentBtn);
    for(let i = 0; i< parentBtn.children.length; i++){
      const otherPage = parentBtn.children[i]
      otherPage.style = 'border: 1px solid #999'
    }
    pageBtn.style ='background-color: LightSteelBlue'
    

  }
  const showPageNumbers = () => {
    let total = getTotalPages(products, rowsPerPage)
    // const parentElement = document.body.children[0]
    const parentElement = document.querySelector('div')
    // console.log(parentElement);
    const paginationElement = parentElement.children[2]
    // console.log(paginationElement);
    

    for(let i = 1; i<= total; i++){
      const pageButtonElement = document.createElement('button')
      pageButtonElement.textContent = i
      pageButtonElement.setAttribute('id', i)
      paginationElement.appendChild(pageButtonElement)
      pageButtonElement.addEventListener('click', pageHandler)
    }


    
    
    
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
module.exports = paginateManagement
// export { paginateManagement }
// const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()


// best
// // const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

// // const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// // const products = require('./data/products.js')

// //your student id, firstname, and lastname here
