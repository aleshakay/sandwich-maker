console.log('Sandwich Maker');

import bread from './components/bread.js.js'
import cheese from './components/cheese.js.js';
import meat from './components/meat.js.js';
import condiments from './components/condiments.js.js';
import veggies from './components/veggies.js.js';
import sandwich from './components/sandwich.js.js'

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    veggies.printVeggieOptions();
    condiments.printCondimentOptions();
    sandwich.printOrderButton();
};

init();