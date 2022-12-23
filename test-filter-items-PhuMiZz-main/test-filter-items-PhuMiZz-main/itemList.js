const { template } = require('@babel/core')
const products = require('./data/products.js')
// import { products } from './data/products.js'
//your student id, firstname, and lastname here
//64130500035 Thanadol saengsawng
function itemList(userItems) {
  const items = userItems  

  const initialPage = () => {
    const div = document.getElementById('categories')
    div.addEventListener('click',showItems(products))

  }

  const filterItemsByCategoryHandler = (event) => {
    const  ul = document.getElementById('items')
    const div = document.getElementById('categories')
    const btnsty =document.querySelectorAll('button')
    btnsty.forEach((color) => {color.style = 'background-color:lightgray'
  
    
  }) 

    const current = event?.target.id ?? 1

    const colortarget = document.getElementById(current)
    colortarget.style = `background-color:yellow`

    const filteredItems = products.filter((product) => {
      return product.category.toLowerCase() === btnsty.id.toLowerCase()
    })
    showItems(filteredItems)

  }

  const showItems = (items) => {
    const  ul = document.getElementById('items')
    for (let i = 0; i < items.length; i++) {
      const li = document.createElement('li')
      li.textContent=`ID:${products[i].id}, NAME:${products[i].name}, CATEGORY:${products[i].category}`
      ul.appendChild(li)
    }
  }

  return {
    initialPage,
    filterItemsByCategoryHandler,
    showItems
  }
}
module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsByCategoryHandler, showItems } =
//   itemList(products)
// initialPage()
