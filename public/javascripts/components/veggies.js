import utilities from '../helpers/utilities.js';

const veggies = [
    {id: "veggie1", name: "Tomato", price: 150 },
    {id: "veggie2", name: "Lettuce", price: 160 },
    {id: "veggie3", name: "Guacamole", price: 180 },
    {id: "veggie4", name: "Pickles", price: 140 },
    {id: "veggie5", name: "Olives", price: 140 },
    {id: "veggie6", name: "Cucumbers", price: 140 },
  ];

  const getSelectedVeggies = () => {
    const selectedVeggies = [];
    // get all veggie checkboxes
    const veggieCheckboxes = document.getElementsByClassName('veggie');
  
    // keep the checked ones in a new array
    for(let j = 0; j < veggieCheckboxes.length; j++){
      for(let k = 0; k < veggies.length; k++){
        if(veggieCheckboxes[j].checked && veggieCheckboxes[j].id === veggies[k].id){
          selectedVeggies.push(veggies[k]);
        }
      }
    }
  
    // return the new array
    return selectedVeggies;
  };
  
  const printVeggieOptions = () => {
    let domString = '';
    for(let i = 0; i < veggies.length; i++){
      domString += `<div class="form-group form-check">
      <input type="checkbox" class="form-check-input veggie" id=${veggies[i].id}>
      <label class="form-check-label" for=${veggies[i].id}>${veggies[i].name}</label>
    </div>
    `;
    }
  
    utilities.printToDom('veggie-counter', domString);
  };
  
  export default { printVeggieOptions, getSelectedVeggies };