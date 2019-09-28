import bread from './bread.js'
import cheese from './cheese.js';
import meat from './meat.js';
import condiments from './condiments.js';
import veggie from './veggies.js';
import utilities from '../helpers/utilities.js'

const createFinalOrder = (items) => {
    let domString2 = '';
    let allPrice = [];
    for(let i = 0; i < items.length; i++){
        domString2 += 
        `<div class= "container-fluid">
            <div class= "row">
            <h2>${items[i].name}</h2>
            <div class= "col-md">
            <h2>${items[i].price}</h2>
            </div>
            </div>
            </div>`;
    }
    utilities.printToDom('final-order', domString2);
  };
  
  const createTotalPrice = () => {
      let 
  }

const createOrderEvent = () => {
     const selectedCheeses = cheese.getSelectedCheeses();
     const selectedBreads = bread.getSelectedBreads();
     const selectedMeats = meat.getSelectedMeats();
     const selectedCondiments = condiments.getSelectedCondiments();
     const selectedVeggies = veggie.getSelectedVeggies();
     const selectedItem  = selectedCheeses.concat(selectedBreads,selectedMeats,selectedCondiments,selectedVeggies)
    createFinalOrder(selectedItem);

}
const printOrderButton = () => {
   const domString = '<div class="container"><div class="row"><button id="sandwich-button" class="btn btn-secondary"> Make Pizza</button></div></div> ' 
    utilities.printToDom('final-order', domString)
    document.getElementById('sandwich-button').addEventListener('click',createOrderEvent)
};



export default { printOrderButton}