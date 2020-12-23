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
}
// TODO: Add factorial and exponent

setupDivs();