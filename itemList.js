// const { template } = require('@babel/core')
// const products = require('./data/products.js')
import { products } from './data/products.js'
//your student id, firstname, and lastname here
//64130500035 Thanadol saengsawng
function itemList(userItems) {
  const items = userItems  

  const initialPage = () => {
    const btn = document.querySelectorAll('button')
    
    btn.forEach(e => {
    e.addEventListener('click',filterItemsByCategoryHandler)
    });
    showItems(items)
  }

  const filterItemsByCategoryHandler = (event) => {
    const btn = document.querySelectorAll('button')
    const cur = event?.target.id
    btn.forEach(a =>{
      a.style = 'background-color:lightgray'
    })

    const ctar = document.getElementById(cur)
    ctar.style = 'background-color:yellow'

    const filteredItems = products.filter((product) => {
      return product.category.toLowerCase() === cur.toLowerCase()
    })
    showItems(filteredItems)
  }

  const showItems = (items) => {
    const ul = document.getElementById('items')
    ul.textContent= ''
    for (let i = 0; i < items.length; i++) {
      const li = document.createElement('li')
      li.textContent = `ID:${items[i].id}, NAEM:${items[i].name}, CATEGORY:${items[i].category}`
      ul.appendChild(li)
    }

  }

  return {
    initialPage,
    filterItemsByCategoryHandler,
    showItems
  }
}
// module.exports = itemList
export { itemList }
const { initialPage, filterItemsByCategoryHandler, showItems } =
  itemList(products)
initialPage()
