import { productManagement } from "../lib/productManagement.js";

// const Product = require('./product.js');


function buyingList(){
    const divElement = document.querySelector('div').children[3];
    const pElement = divElement.children[1];
    const spanElement = pElement.querySelectorAll('span')

    function showBuyingList(itemId, productName, amount){
        const buyingListElement = divElement.children[2];
        const newLiElement = document.createElement('li');
        newLiElement.setAttribute('id', itemId)
        const pictureElement = document.createElement('img');

        pictureElement.src = './images/pending.svg';
             
        newLiElement.textContent = `${productName}, ${amount} ${(Number(amount) === 1)? 'unit':'units'} `;

        buyingListElement.appendChild(newLiElement);
        newLiElement.appendChild(pictureElement);
        
    }

    function showNumberOfDone(numberOfDone){
        spanElement[1].textContent = numberOfDone;
    }

    function showNumberOfPending(numberOfPending){
        spanElement[0].textContent = numberOfPending;
    }

    function clearBuyingList(){
        const buyingListElement = divElement.children[2];
        const liElement = buyingListElement.children;

        for(let i = liElement.length - 1 ; i >= 0; i--){
            buyingListElement.removeChild(liElement[i])
        }
    }

    return {showBuyingList, showNumberOfDone, showNumberOfPending, clearBuyingList}

}


export{buyingList}