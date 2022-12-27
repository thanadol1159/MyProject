// import { products } from './data/products.js'
const { template } = require('@babel/core')
const products = require('./data/products.js')

//your student id, firstname, and lastname here
// 64130500035  thanadol saengsawang
function itemList(userItems) { 
  const items = userItems

  const initialPage = () => {
    const input = document.querySelector('input')
    input.addEventListener('input',filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    const inputKey = event.target.value
    let filterItem = items.filter((product)=>
    product.keywords.toLowerCase().includes(inputKey.toLowerCase()))
    console.log(filterItem.length);
    showItems(filterItem)
  
  }

  const showItems = (items) => {
    const ul  = document.getElementById('items')
    ul.textContent = ''
    for (const product of items) {
      const li = document.createElement('li')
      li.textContent = `ID:${product.id}, NAME:${product.name}, KEYWORDS:${product.keywords}`
      ul.appendChild(li)
      
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

