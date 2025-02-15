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
    let themeButton = document.getElementById('themeMode');

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

    if (body.classList.contains('darkMode')){
        themeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" stroke-width="2">
                        <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
                        <path d="M6.343 17.657l-1.414 1.414"></path>
                        <path d="M6.343 6.343l-1.414 -1.414"></path>
                        <path d="M17.657 6.343l1.414 -1.414"></path>
                        <path d="M17.657 17.657l1.414 1.414"></path>
                        <path d="M4 12h-2"></path>
                        <path d="M12 4v-2"></path>
                        <path d="M20 12h2"></path>
                        <path d="M12 20v2"></path>
                    </svg>`;  
    } else {
        themeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" stroke-width="2">
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                    </svg>`;
    }
}