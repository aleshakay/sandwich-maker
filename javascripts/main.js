console.log('Sandwich Maker');

import bread from './components/bread.js'
import cheese from './components/cheese.js';
import meat from './components/meat.js';
import condiments from './components/condiments.js';
import veggies from './components/veggies.js';

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    veggies.printVeggieOptions();
    condiments.printCondimentOptions();
};

init();