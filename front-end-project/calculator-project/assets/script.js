
// The Calculator Object
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false,
}

// Function to update the display number
function updateDisplay(){
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

// Function to clear the display from any value
function clearDisplay(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

// Function to input digit from the button
function inputDigit(digit){
    if(calculator.displayNumber == 0){
        calculator.displayNumber = digit;
    } else{
        calculator.displayNumber += digit;
    }
}

// Function to handle the operator and the number
function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        // reset the display number for the next button starting from 0
        calculator.displayNumber = '0';
    } else{
        alert("Operator sudah ditetapkan, mohon clear terlebih dahulu");
    }
}

// Function to perform calculation
function performCalculation(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;

    if(calculator.operator == '+'){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if(calculator.operator == '-'){
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    // Object that will be sent to putHistory() argument
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }

    // Call the function to run the function from script and storage file
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}

// Function to inverse the number
function inverseNumber(){
    if(calculator.displayNumber === '0'){
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}

// button class variable
const buttons = document.querySelectorAll('.button');

// For of loop to make the button work
for(const button of buttons){
    button.addEventListener('click', function(event){
        const target = event.target;

        if(target.classList.contains('clear')){
            clearDisplay();
            updateDisplay();
            return;
        } else if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        } else if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        } else if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            return;
        }

        // Input the input to the inputDigit function
        inputDigit(target.innerText);
        // Update the display when the button clicked
        updateDisplay();

    });
}