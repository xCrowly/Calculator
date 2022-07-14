var theResult = document.getElementById("result");
var theFormula = document.getElementById("userForm");
var clickedButtonId;
const operators = ['+', '-', '*', '/'];

// to get the id of clicked button 
function getInpId(clickedBut) {
    clickedButtonId = clickedBut;
    showInput();
}


function showInput() {
    if (theFormula.innerText == 0 & clickedButtonId != '=') {
        theFormula.innerHTML = clickedButtonId;
    } else {
        if (theFormula.innerText.length <= 29 & clickedButtonId != '=') {
            theFormula.innerHTML += clickedButtonId;
        }
    }
}

// to clear the user input
function clearInput() {
    theFormula.innerHTML = 0;
}

// to clear the result
function clearResult() {
    theResult.innerHTML = 0;
}

// to change the sign of the result
function negative() {
    theResult.innerHTML *= -1;
}

// to devide the number after the last operator by 100
function percentage() {
    var tempForm = document.getElementById('userForm').innerHTML;
    var foundOperator = false;
    var numberToDivideBy100 = [];
    for (let i = tempForm.length; i > 0; i--) {
        if (foundOperator == true) {
            break;
        } else {
            for (let j = 0; j < operators.length; j++) {
                if (tempForm[i] == operators[j]) {
                    console.log(tempForm[i], i);
                    numberToDivideBy100 = tempForm.slice(i + 1, tempForm.length);
                    console.log(numberToDivideBy100);
                    tempForm = tempForm.slice(0, i + 1);
                    foundOperator = true;
                    break;
                }
            }
        }
    }

    if (numberToDivideBy100.length != 0) {
        if (numberToDivideBy100.length == 1 & numberToDivideBy100[0] == '.') {
            console.log('Nan');
        } else {
            numberToDivideBy100 /= 100;
            tempForm = tempForm + numberToDivideBy100;
            document.getElementById('userForm').innerHTML = tempForm;
        }
    }
}

function showResult() {

}