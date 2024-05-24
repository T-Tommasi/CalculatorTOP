//Global variables
let memory = ''
let usedOperator = ''

//Fix in place the numbers already pressed when one of the operators is started
function operatorListener (button, operator) {
    button.addEventListener('click', function () {
        pushToMemory(memoryA);
        usedOperator = operator
    })
};

operatorListener(PLUS, '+');
operatorListener(MINUS, '-');
operatorListener(DIVISION, '/');
operatorListener(MULTIPLY, '*');

function pushToMemory (numbers) {
    memory = numbers.toString();
    numbers = '';
    return;
};
//Get the various numerical buttons
const buttonZero = document.getElementById('#button0');
const buttonOne = document.getElementById('#button1');
const buttonTwo = document.getElementById('#button2');
const buttonThree = document.getElementById('#button3');
const buttonFour = document.getElementById('#button4');
const buttonFive = document.getElementById('#button5');
const buttonSix = document.getElementById('#button6');
const buttonSeven = document.getElementById('#button7');
const buttonEight = document.getElementById('#button8');
const buttonNine = document.getElementById('#button9');

//Get the operators
const EQUALS = document.getElementById('#equals');
const MINUS = document.getElementById('#minus');
const PLUS = document.getElementById('#plus');
const DIVISION = document.getElementById('#divided');
const MULTIPLY = document.getElementById('#multiplication');

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
}

//function for managing and memorizing inserted numbers
//pseudo-code: The screen should show any number that was pressed by adding the pressed number after
//the previous one without cancelling it
let memoryA = [];
function addNumberToMemory (number) {
    console.log(memoryA);
    return memoryA.push(number);
}