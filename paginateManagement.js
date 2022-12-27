const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//your student id, firstname, and lastname here
//64130500035 thanadol saengsawang
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    let item = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    const ul = document.getElementById('products')
    item.forEach((item) => {
      const li = document.createElement('li')
      li.textContent = `ID:${item.id}, NAME:${item.name}`
      ul.appendChild(li)
      
    });

      
  }
  const pageHandler = (event) => {
    const pagesStyle = document.querySelectorAll('button')
    pagesStyle.forEach((page) => (page.style = 'border: 1px solid #999'))

    const productsUl = document.getElementById('products')
    productsUl.textContent = ''

    const currentPage = event?.target.id ?? 1
    showItemsOfCurrentPage(currentPage, rowsPerPage)

    const tarbtn = document.getElementById(currentPage)
    tarbtn.style = 'background-color: LightSteelBlue'


  }
  const showPageNumbers = () => {
      const totalPages = getTotalPages(products,rowsPerPage)
      const paginateDiv = document.querySelector('.pagination')
      for (let page = 1; page <= totalPages; page++) {
        const btn = document.createElement('button')
        btn.textContent = page
        btn.setAttribute('id',page)
        paginateDiv.appendChild(btn)
        btn.addEventListener('click',pageHandler)
        
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


