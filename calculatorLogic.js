//Global variables
let memory = ''
let usedOperator = ''

function pushToMemory (numbers) {
    memory = numbers.toString();
    numbers = '';
    return;
};
//Get the various numerical buttons
const buttonZero = document.querySelector('#button0');
const buttonOne = document.querySelector('#button1');
const buttonTwo = document.querySelector('#button2');
const buttonThree = document.querySelector('#button3');
const buttonFour = document.querySelector('#button4');
const buttonFive = document.querySelector('#button5');
const buttonSix = document.querySelector('#button6');
const buttonSeven = document.querySelector('#button7');
const buttonEight = document.querySelector('#button8');
const buttonNine = document.querySelector('#button9');

//Get the operators
const EQUALS = document.querySelector('#equals');
const MINUS = document.querySelector('#minus');
const PLUS = document.querySelector('#plus');
const DIVISION = document.querySelector('#divided');
const MULTIPLY = document.querySelector('#multiplication');

operatorListener(PLUS, '+');
operatorListener(MINUS, '-');
operatorListener(DIVISION, '/');
operatorListener(MULTIPLY, '*');

//Add a function to check if the equal is pressed, if it is pressed run a function and get the result
function equal(object) {
    object.addEventListener('click', function () {
        if (usedOperator == '+') {
            let result = add(memory,memoryA);
        } else if (usedOperator == '-') {
            let result = subtract(memoryA,memory);
        } else if(usedOperator == '*') {
            let result = multiplication(memoryA,memory);
        } else if(usedOperator == '/') {
            let result = division(memoryA,memory);
        } else {
            return alert('There was an error! no operator detected')
        }
    })
}

//Add eventListener for click on all the elements before
function numberListener(numberButton, number) {
    number.addEventListener('click', function () {
        addNumberToMemory(number);
    })
};

numberListener(buttonZero, 0);
numberListener(buttonOne, 1);
numberListener(buttonTwo, 2);
numberListener(buttonThree, 3);
numberListener(buttonFour, 4);
numberListener(buttonFive, 5);
numberListener(buttonSix, 6);
numberListener(buttonSeven, 7);
numberListener(buttonEight, 8);
numberListener(buttonNine, 9);

//Create a function for each of the basic mathematical operations

function add(firstNumber,secondNumber) {
    return firstNumber + secondNumber
};

function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber
};

function multiplication(firstNumber,secondNumber){
    return firstNumber * secondNumber
};

function division(firstNumber,secondNumber){
    return firstNumber*secondNumber
};

//function for managing and memorizing inserted numbers
//pseudo-code: The screen should show any number that was pressed by adding the pressed number after
//the previous one without cancelling it
let memoryA = [];
function addNumberToMemory (number) {
    console.log(memoryA);
    return memoryA.push(number);
};

//Fix in place the numbers already pressed when one of the operators is started
function operatorListener (button, operator) {
    button.addEventListener('click', function () {
        pushToMemory(memoryA);
        usedOperator = operator;
    })
};