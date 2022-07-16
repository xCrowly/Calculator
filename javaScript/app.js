var theResult = document.getElementById("result");
var theFormula = document.getElementById("userForm");
var clickedButtonId;
const operators = ['+', '-', '*', '/'];

// to get the id of clicked button 
function getInpId(clickedBut) {
    clickedButtonId = clickedBut;
    showInput();
}

// get input from 0 to 9
function showInput() {
    if (theFormula.innerHTML == 0) {
        theFormula.innerHTML = clickedButtonId;
    }else{
        theFormula.innerHTML += clickedButtonId;
    }
}

// to add operators in the input formula
function operatorInput(clickedOperator) {
    clickedButtonId = clickedOperator;

    if (operators.includes(clickedButtonId)) {
        // to make it change the theform to [+ or -] only if it is in the start
        if (theFormula.innerHTML == 0 || theFormula.innerHTML == '+'
            || theFormula.innerHTML == '-') {
            switch (clickedButtonId) {
                case '/':
                    if (theFormula.innerHTML != '+' && theFormula.innerHTML != '-') {
                        theFormula.innerHTML += clickedButtonId;
                    }
                    break;
                case '*':
                    if (theFormula.innerHTML != '+' && theFormula.innerHTML != '-') {
                        theFormula.innerHTML += clickedButtonId;
                    }
                    break;
                case '+':
                    theFormula.innerHTML = clickedButtonId;
                    break;
                case '-':
                    theFormula.innerHTML = clickedButtonId;
                    break;
            }
        }
        // to make it change the last operator if it is existed, not to add to it
        else if (operators.includes(theFormula.innerHTML[theFormula.innerHTML.length - 1])
            && theFormula.innerHTML.length > 1) {
            switch (clickedButtonId) {
                case '/':
                    if (theFormula.innerHTML[theFormula.innerHTML.length - 2] == '/'
                        || theFormula.innerHTML[theFormula.innerHTML.length - 2] == '*') {
                        removeNumber();
                        removeNumber();
                        theFormula.innerHTML += '/';
                    } else {
                        removeNumber();
                        theFormula.innerHTML += '/';
                    }
                    break;
                case '*':
                    if (theFormula.innerHTML[theFormula.innerHTML.length - 2] == '/'
                        || theFormula.innerHTML[theFormula.innerHTML.length - 2] == '*') {
                        removeNumber();
                        removeNumber();
                        theFormula.innerHTML += '*';
                    } else {
                        removeNumber();
                        theFormula.innerHTML += '*';
                    }
                    removeNumber();
                    theFormula.innerHTML += '*';
                    break;
                case '+':
                    // to check if the last operator = [/ or *] so it don't remove it 
                    if (theFormula.innerHTML[theFormula.innerHTML.length - 1] == '/'
                        || theFormula.innerHTML[theFormula.innerHTML.length - 1] == '*') {

                        theFormula.innerHTML += '+';
                    } else {
                        removeNumber();
                        theFormula.innerHTML += '+';
                    }
                    break;
                case '-':
                    // to check if the last operator = [/ or *] so it don't remove it 
                    if (theFormula.innerHTML[theFormula.innerHTML.length - 1] == '/'
                        || theFormula.innerHTML[theFormula.innerHTML.length - 1] == '*') {

                        theFormula.innerHTML += '-';
                    } else {
                        removeNumber();
                        theFormula.innerHTML += '-';
                    }
                    break;
            }
        } else {
            switch (clickedButtonId) {
                case '/':

                    theFormula.innerHTML += '/';
                    break;
                case '*':

                    theFormula.innerHTML += '*';
                    break;
                case '+':

                    theFormula.innerHTML += '+';
                    break;
                case '-':

                    theFormula.innerHTML += '-';
                    break;
            }
        }
    }

}

// to clear the user input
function cleanScreen() {
    theFormula.innerHTML = 0;
    theResult.innerHTML = 0;
}

// to remove one number from the end
function removeNumber() {
    if (theFormula.innerHTML.length == 1) {
        theFormula.innerHTML = 0
    } else {
        theFormula.innerHTML = theFormula.innerHTML.substring(0, theFormula.innerText.length - 1);
    }
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
    var theFinalResult = document.getElementById('userForm').innerHTML;
    console.log(theFinalResult);
}