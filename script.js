const container = document.querySelector('.calculator-keys'); 
let displayVal = "";
// let inputVal = "";

function operate (operator, first, second) {
    switch(operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return (second === 0) ? 'Nah. That ain\'t it, chief. Try again!' : first / second;
        default :
            throw 'Error: no operator selected';
    }
}

function showDisplay(val) {
    const inputField = document.querySelector("#input-field");
    inputField.innerHTML = val;

    const outputField = document.querySelector("#output-field");
    outputField.innerHTML = displayVal;
}

// showDisplay();

function setupDivs () {
    // const display = document.querySelector('.display-area');
    // const clear = document.querySelector('.clear-divs');
    // const operations = document.querySelector('.operations-divs');
    // const numbers = document.querySelector('.numbers-divs');
    // TODO: Set up the calculator grids 
    // using the grid lines
    
}
// TODO: Add factorial and exponent

// setupDivs();