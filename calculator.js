function addValue(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculate(){
    let display = document.getElementById('display');
    let expression = display.value
                    .replaceAll('÷', '/')
                    .replaceAll('×', '*')
                    .replaceAll('−', '-')
                    .replaceAll('+', '+');
    
    try{
        display.value = eval(expression);
    }
    catch (error) {
        alert("Kesalahan Input! Mohon masukkan angka yang benar.");
        clearDisplay();
    }
}

function backSpace(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function squareRoot(){
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    
    if (value < 0 || isNaN(value)) {
        alert("Masukkan angka positif!");
        clearDisplay();
    } else {
        display.value = Math.sqrt(value);
    }
}

function themeMode(){
    let body = document.body;
    let calculatorBox = document.getElementById('calculator-box');
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button');
    let operatorButtons = document.querySelectorAll('.operator');
    let resultButton = document.querySelectorAll('.result');

    body.classList.toggle('darkMode');
    calculatorBox.classList.toggle('darkCalcBox');
    display.classList.toggle('darkDisplay');

    buttons.forEach(button => {
        button.classList.toggle('darkButtons');
    });

    operatorButtons.forEach(operatorButtons => {
        operatorButtons.classList.toggle('darkOperator');
    });

    resultButton.forEach(resultButton => {
        resultButton.classList.toggle('darkResult');
    });
}