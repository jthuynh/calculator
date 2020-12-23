const container = document.querySelector('.calculator-keys'); 
let initCalcVal = false;
let displayVal = "";

function Expression (operator, first, second) {
    this.operator = operator;
    this.first = first;
    this.second = second;
}
function factorial (n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

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
        case "!":
            displayVal = factorial(n);
            break;
        case "x":
            displayVal = Math.pow(first, second);
            break;
        default:
            throw 'Error: operate method failed';
    }
}

function showNumDisplay(e) {
    const inputField = document.querySelector("#input-field");
    if (initCalcVal) {
        inputField.innerHTML = "";
        initCalcVal = false;
    }
    displayVal += e.target.id;
    inputField.innerHTML += e.target.id;
}

function execOp(e) {
    switch(e.target.id) {
        case "AC":
            displayVal = "";
            inputField.innerHTML = "0";
            break;
        case "exponent":
            break;
        case "factorial":
            break;
        case "divide":
            break;
        case "times":
            break;
        case "plus":
            break;
        case "minus":
            break;
        case "sign":
            break;
        case "decimal":
            break;
        case "equal":
            break;
        default:
            throw 'Error: execOp failed';
    }
}
function setupDivs () {
    // let expression = new Expression(null, null, null);
    const numbers = document.querySelectorAll(".digit");
    numbers.forEach(number => number.addEventListener('click', showNumDisplay));
    initCalcVal = true;

    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => operator.addEventListener('click', execOp));
}
// TODO: Add factorial and exponent

setupDivs();