import { productManagement } from "../lib/productManagement.js";
import { buyingList } from "../UI/buyingList.js";
const {addProduct, getProductList, clearProduct, getNumberOfPending, getNumberOfDone, setDoneItem, loadProducts} = productManagement();
const {showBuyingList, showNumberOfDone, showNumberOfPending , clearBuyingList} = buyingList();

function eventHandler (){
    const inputNode = document.querySelectorAll('input');
    const divElement = document.querySelector('div').children[3];
    const buyingListElement = divElement.children[2];

    function addProductHandler(){
        
        let newProductId = addProduct(inputNode[0].value, inputNode[1].value)

        if(inputNode[0].value.trim().length === 0){
            alert('please type something!')
        }else{
            showBuyingList(newProductId, inputNode[0].value, inputNode[1].value)
            addBtnHandler(newProductId);

            inputNode[0].value = ''
            inputNode[1].value = 1

            showNumberOfDone(getNumberOfDone());
            showNumberOfPending(getNumberOfPending());
        }
    }

    function addBtnHandler(itemId){
        const liElement = document.getElementById(itemId)
        const imgElement = liElement.children[0]
        imgElement.addEventListener('click', doneBtnHandler)
    }

    function doneBtnHandler (event) {
        const targetSetDone = event.target;
        setDoneHandler(targetSetDone);
        setDoneItem(targetSetDone.parentElement.id)

        showNumberOfDone(getNumberOfDone());
        showNumberOfPending(getNumberOfPending());
    }

    function setDoneHandler (btn){
        btn.src = './images/done.svg'
        btn.parentNode.style = 'text-decoration: line-through; color:grey'
    }

    function clearProductHandler(){
        alert('Empty List')
        clearProduct();
        clearBuyingList();

        showNumberOfDone(getNumberOfDone());
        showNumberOfPending(getNumberOfPending());
    }

    function beforeUnloadHandler (event){
        event.preventDefault()
        localStorage.setItem('productList', JSON.stringify(getProductList()))
    }

    function loadHandler(){
        const myProductList = localStorage.getItem('productList')
        console.log(myProductList);
        if(myProductList.length !== 0){
            loadProducts(JSON.parse(myProductList))
            getProductList().forEach(e => {
                showBuyingList(e.id, e.item, e.amount)
                addBtnHandler(e.id)
                if(e.status === true){
                    const img = document.getElementById(e.id).querySelector('img')
                    setDoneHandler(img)
                }
            })

            showNumberOfDone(getNumberOfDone())
            showNumberOfPending(getNumberOfPending())
        }
    }

    return {addProductHandler, clearProductHandler, beforeUnloadHandler, loadHandler}
}

export {eventHandler}