import { Product } from "./product.js";


function productManagement(){
    let productList = [];
    function addProduct(item, amount){
        const newItem = new Product(item, amount)
        productList.push(newItem)
        return newItem.id
    }

    function getProductList(){
        return productList;
    }

    function clearProduct(){
        return productList = []
    }

    function getNumberOfPending(){
        return productList.filter(e => e.status === false).length
    }

    function getNumberOfDone(){
        return productList.filter(e => e.status === true).length
    }

    function setDoneItem(itemId){
        // productList.find(({id}) => id === Number(itemId)).status = true
        productList.find(({id}) => id === Number(itemId)).setDone()
    }

    function loadProducts(userProduct){
        productList = userProduct
        Product.setRunningId(userProduct[userProduct.length - 1].id + 1)
    }

    return {addProduct, getProductList, clearProduct, getNumberOfPending, getNumberOfDone, setDoneItem, loadProducts}
}

export {productManagement}