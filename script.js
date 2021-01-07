const container = document.querySelector('.calculator-keys'); 
let initCalcVal = false;
let expression = {firstVal: null, secVal: null, operation: null};
let displayVal = "";

function factorial (n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

function clearExpr() {
    expression.firstVal = null;
    expression.secVal = null;
    expression.operation = null;
}

function updateDisp(displayVal) {
    const inputField = document.querySelector("#input-field");
    inputField.innerHTML = displayVal.toString();
}

function operate (expression) {
    switch(expression.operation) {
        case "+":
            displayVal = expression.firstVal + expression.secVal;
            break;
        case "-":
            displayVal = expression.firstVal - expression.secVal;
            break;
        case "*":
            displayVal = expression.firstVal * expression.secVal;
            break;
        case "/":
            (expression.secVal == 0) ? displayVal = 'Nah. That ain\'t it, chief. Try again!' : displayVal = expression.firstVal / expression.secVal;
            break;
        case "!":
            displayVal = factorial(Number(expression.firstVal));
            break;
        case "x":
            displayVal = Math.pow(expression.firstVal, expression.secVal);
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

    if (displayVal == "0" || inputField.innerHTML == "0") {
        displayVal = "";
        updateDisp(displayVal);
    } 
    
    displayVal += e.target.id;
    updateDisp(displayVal);
}

function updateOutput() {
    const outputField = document.querySelector("#output-field");
    outputField.innerHTML = `${expression.firstVal} ${expression.operation} ${expression.secVal} =`;
}

function getSecVal(exp) {
    if (exp.firstVal != null && exp.operation != null) {
        if (displayVal == "") {
            displayVal = exp.firstVal;
            expression.operation = exp.operation;
            return;
        }
        exp.secVal = Number(displayVal);
        console.log(exp.secVal);
        operate(exp);
        updateOutput();
        updateDisp(displayVal);
        expression.operation = null;
    } 
}

function getFirstVal(exp, op) {
    exp.firstVal = Number(displayVal);
    exp.operation = op;
    displayVal = "";
}

function execOp(e) {
    switch(e.target.id) {
        case "delete":
            displayVal = displayVal.slice(0,-1);
            (displayVal.length == 0) ? updateDisp(0) : updateDisp(displayVal);
            break;

        case "AC":
            displayVal = "";
            updateDisp(0);
            clearExpr();
            break;

        case "exponent":
            getSecVal(expression);
            getFirstVal(expression, "x");
            break;

        case "factorial":
            if (displayVal == "") { return; }

            getFirstVal(expression, "!");
            operate(expression);
            updateOutput();
            updateDisp(displayVal);
            expression.operation = null;
            displayVal = "";
            break;

        case "divide":
            getSecVal(expression);
            getFirstVal(expression, "/");
            break;
            
        case "times":
            getSecVal(expression);
            getFirstVal(expression, "*");
            break;

        case "plus":
            getSecVal(expression);
            getFirstVal(expression, "+");
            break;

        case "minus":
            getSecVal(expression);
            getFirstVal(expression, "-");
            break;

        case "sign":
            (displayVal > 0) ? displayVal = "-" + displayVal : displayVal = displayVal.slice(1, displayVal.length);
            updateDisp(displayVal);
            break;

        case "decimal":
            if (!displayVal.includes(".")) {
                displayVal += ".";
                updateDisp(displayVal);
            }
            break;

        case "equal":
            if (expression.operation == null) {
                displayVal = "";
                updateDisp(0);
                clearExpr();
            }
            getSecVal(expression);
            displayVal = "";
            break;

        default:
            throw 'Error: execOp failed';
    }
}

function setupDivs () {
    const numbers = document.querySelectorAll(".digit");
    numbers.forEach(number => number.addEventListener('click', showNumDisplay));
    initCalcVal = true;

    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => operator.addEventListener('click', execOp));
}
// TODO: Add factorial and exponent
setupDivs();
