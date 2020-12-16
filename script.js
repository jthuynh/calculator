// function add (first, second) {
//     return first + second;
// }

// function subtract (first, second) {
//     return first - second;
// }

// function multiply (first, second) {
//     return first * second;
// }

// function divide (first, second) {
//     return first / second;
// }

// TODO: POSSIBLY PUT ABOVE INTO A SWITCH STATEMENT?

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