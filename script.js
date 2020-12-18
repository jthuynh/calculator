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
            return (second === 0) ? 'Nah. That ain\'t it, chief' : first / second;
        default :
            throw 'Error: no operator selected';
    }
}

function setupDivs () {
    const display = document.querySelector('.display-area');
    const clear = document.querySelector('.clear-section');
    const operations = document.querySelector('.operations-section');
    const numbers = document.querySelector('.numbers-section');
}

setupDivs();