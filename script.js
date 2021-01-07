const container = document.querySelector('.calculator-keys'); 
let initCalcVal = false;
let expression = {firstVal: null, secVal: null, operation: null};
let displayVal = "";

function factorial (n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

function clearDispVal() {
    displayVal = "";
}

function clearExpr() {
    expression.firstVal = null;
    expression.secVal = null;
    expression.operation = null;
}

function updateDisp(displayVal) {
    console.log(displayVal.toString());
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
            (expression.secVal === 0) ? displayVal = 'Nah. That ain\'t it, chief. Try again!' : displayVal = expression.firstVal / expression.secVal;
            break;
        case "!":
            displayVal = factorial(expression.firstVal);
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
    if (displayVal === "0") {
        clearDispVal();
    }
    displayVal += e.target.id;
    inputField.innerHTML += e.target.id;
}

function getSecVal(exp) {
    if (exp.firstVal != null && exp.operation != null) {
        exp.secVal = Number(displayVal);
        operate(exp);
        updateDisp(displayVal);
        expression.operation = null;
    } 
}

function getFirstVal(exp, op) {
    exp.firstVal = Number(displayVal);
    exp.operation = op;
    clearDispVal();
}

function execOp(e) {
    const inputField = document.querySelector("#input-field");
    // console.log(e.target.id);
    switch(e.target.id) {
        case "delete":
            if (displayVal === "") {
                updateDisp(0);
            } else {
                displayVal = displayVal.slice(0,-1);
                updateDisp(displayVal);
            }
            break;

        case "AC":
            clearDispVal();
            inputField.innerHTML = "0";
            clearExpr();
            break;

        case "exponent":
            getSecVal(expression);
            getFirstVal(expression, "x");
            break;

        case "factorial":
            getFirstVal(expression, "!");
            operate(expression);
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
            break;

        case "equal":
            if (expression.operation == null) {
                clearDispVal();
                updateDisp(0);
                clearExpr();
            }
            getSecVal(expression);
            
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
