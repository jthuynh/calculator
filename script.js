const container = document.querySelector('.container');

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

function setupDivs () {
    // const display = document.querySelector('.display-area');
    // const clear = document.querySelector('.clear-divs');
    // const operations = document.querySelector('.operations-divs');
    // const numbers = document.querySelector('.numbers-divs');
    // TODO: Set up the calculator grids 
    // using the grid lines
    
}
// TODO: Add factorial and exponent

setupDivs();