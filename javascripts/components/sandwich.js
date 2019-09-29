import bread from './bread.js'
import cheese from './cheese.js';
import meat from './meat.js';
import condiments from './condiments.js';
import veggie from './veggies.js';
import utilities from '../helpers/utilities.js'

const createFinalOrder = (items) => {
    let domString2 = '<h2>Sandwich Order</h2>';
    for(let i = 0; i < items.length; i++){
        domString2 += 
        `<div class="">
        <div class= "container-fluid">
            <div class= "row">
            <h3>${items[i].name}</h3>
            <div class= "col-md">
            <h3>${items[i].price}</h3>
            </div>
            </div>
            </div>
            </div>`;
    }
    utilities.printToDom('final-order', domString2);
  };
  
const createTotalPrice = (prices) => {
    let allPrices = 0;
    let domString3 = '';
    for(let i = 0; i < prices.length; i++){
      allPrices += (prices[i].price)  
    }
    domString3 = `<div id="pricesline" class= "d-flex justify-content-center">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-">
                                <h2>Total</h2>
                            </div>
                            <div class="col-">
                                <p class="totalLine">:${allPrices}</p>
                            </div>
                        </div>
                    </div>
                </div>`
    utilities.printToDom('total-order', domString3)
}
   
const createOrderEvent = () => {
     const selectedCheeses = cheese.getSelectedCheeses();
     const selectedBreads = bread.getSelectedBreads();
     const selectedMeats = meat.getSelectedMeats();
     const selectedCondiments = condiments.getSelectedCondiments();
     const selectedVeggies = veggie.getSelectedVeggies();
     const selectedItem  = selectedCheeses.concat(selectedBreads,selectedMeats,selectedCondiments,selectedVeggies)
    createFinalOrder(selectedItem)
    createTotalPrice(selectedItem);

}
const printOrderButton = () => {
   const domString = '<div class="container"><div class="row"><button id="sandwich-button" class="btn btn-secondary"> Make Sandwich</button></div></div> ' 
    utilities.printToDom('final-order', domString)
    
    document.getElementById('sandwich-button').addEventListener('click',createOrderEvent)
};



export default { printOrderButton}