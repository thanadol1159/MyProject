// import { products } from './data/products.js'
const { template } = require('@babel/core')
const products = require('./data/products.js')

//your student id, firstname, and lastname here
// 64130500079 Siripoom Kusonsong
function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const inputElement = document.querySelector("input");
    inputElement.addEventListener("input", filterItemsHandler
    )
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    const inputKey = event.target.value
    let filterItem = items.filter((product) =>
      product.keywords.toLowerCase().includes(inputKey.toLowerCase()))
    console.log(filterItem.length);
    showItems(filterItem)



  }

  const showItems = (items) => {
    const ulElement = document.getElementById("items")
    ulElement.textContent = ""
    for (const product of items) {
      const liElement = document.createElement("li")
      liElement.textContent = `ID:${product.id}, NAME:${product.name}, KEYWORDS:${product.keywords}`
      ulElement.appendChild(liElement)
    }

  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()
