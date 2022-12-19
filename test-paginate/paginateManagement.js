const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'
const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//your student id, firstname, and lastname here
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const itemsOfCurrentPage = getItemsOfCurrentPage(
      products,
      currentPageNumber,
      rowsPerPage
    )
    const productsUl = document.getElementById('products')
    itemsOfCurrentPage.forEach((item) => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      productsUl.appendChild(liElement)
    })
  }

  const pageHandler = (event) => {
    // clean button click styles
    const pagesStyle = document.querySelectorAll('button')
    pagesStyle.forEach((page) => (page.style = 'border: 1px solid #999'))

    //clean previous page's items
    const productsUl = document.getElementById('products')
    productsUl.textContent = ''

    //calculating current page
    const currentPage = event?.target.id ?? 1
    showItemsOfCurrentPage(currentPage, rowsPerPage)

    //add button click style to a current page
    const targetPageButton = document.getElementById(currentPage)
    targetPageButton.style = 'background-color: LightSteelBlue'
  }

  //generate page numbers and add click event on each of page number
  const showPageNumbers = () => {
    const totalPages = getTotalPages(products, rowsPerPage)
    const paginateDiv = document.querySelector('.pagination')
    for (let page = 1; page <= totalPages; page++) {
      const buttonElement = document.createElement('button')
      buttonElement.textContent = page
      buttonElement.setAttribute('id', page)
      paginateDiv.appendChild(buttonElement)
      buttonElement.addEventListener('click', pageHandler)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
module.exports = paginateManagement
// export { paginateManagement }
// const { showPageNumbers,  pageHandler } =
//   paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()
