var theResult = document.getElementById("result");
var theFormula = document.getElementById("userForm");
var clickedButtonId;


function getInpId(clickedBut) {
    clickedButtonId = clickedBut;
    console.log(clickedBut);
    showInput();
}

function showInput() {
    if (theFormula.innerText == 0) {
        theFormula.innerHTML = clickedButtonId;
    } else {
        if (theFormula.innerText.length <= 29) {
            theFormula.innerHTML += clickedButtonId;
        }
    }
}

function clearInput() {
    theFormula.innerHTML = 0;
}

function clearResult() {
    theResult.innerHTML = 0;
}

function negative() {
    theResult.innerHTML *= -1;
}

function percentage() {
    const tempForm = theFormula.innerText;
    for (let i = tempForm.length; i > 0; i--) {
        if (tempForm[i] in ["+", '-', '*', '/']) {
            console.log(tempForm[i]); 
            break;
        }
    }
}