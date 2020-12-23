const container = document.querySelector('.calculator-keys'); 
let displayVal = "";
// let inputVal = "";

function operate (operator, first, second) {
    switch(operator) {
        case "+":
            displayVal = first + second;
            break;
        case "-":
            displayVal = first - second;
            break;
        case "*":
            displayVal = first * second;
            break;
        case "/":
            (second === 0) ? displayVal = 'Nah. That ain\'t it, chief. Try again!' : displayVal = first / second;
            break;
        case "factorial":
            break;
        case "exponent":
            displayVal = Math.pow(first, second);
            break;
        default :
            throw 'Error: no operator selected';
    }
}

function showNumDisplay(e) {
    const inputField = document.querySelector("#input-field");
    // inputField.innerHTML = e;
    displayVal += e.target.id;
    inputField.innerHTML += e.target.id;
    // const outputField = document.querySelector("#output-field");
    // outputField.innerHTML = displayVal;
}

// showDisplay();

function setupDivs () {
    const numbers = document.querySelectorAll(".digit");
    console.log(numbers);
    numbers.forEach(number => number.addEventListener('click', showNumDisplay));

    const operators = document.querySelectorAll(".operator");
    console.log(operators);
}
// TODO: Add factorial and exponent

setupDivs();