import { productManagement } from "./lib/productManagement.js";
import { buyingList } from "./UI/buyingList.js";
import { eventHandler} from "./events/eventHandler.js";

const {addProduct, getProductList, clearProduct, getNumberOfPending, getNumberOfDone} = productManagement();
const {showBuyingList, showNumberOfDone, showNumberOfPending , clearBuyingList} = buyingList();
const {addProductHandler, clearProductHandler, beforeUnloadHandler, loadHandler} = eventHandler();

// let a = addProduct('Banana', '1');
// let b = addProduct('Apple', '2');
// let c = addProduct('Orange', '2');
// let d = addProduct('Spring Onion', '2');
// console.log(a);
// console.log(getProductList());
// console.log(getNumberOfPending());


// showBuyingList(a, getProductList().find(e => e.id === a).item, getProductList().find(e => e.id === a).amount, getProductList().find(e => e.id === a).status)
// showNumberOfDone(getNumberOfDone())
// showNumberOfPending(getNumberOfPending())

window.addEventListener('beforeunload', beforeUnloadHandler)
window.addEventListener('load', loadHandler)

const submitBtn = document.querySelector('form').querySelector('button')
// console.log(submitBtn);
submitBtn.addEventListener('click', addProductHandler)

const clearBtn = document.getElementById('btn-clear')
// console.log(clearBtn);
clearBtn.addEventListener('click', clearProductHandler)
