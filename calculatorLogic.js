//Variables for showing the results on the calculator
const plus = '+';
const minus = '-';
const multiply = '*';
const divisionSign = '/';
let numberA = '';
let numberB = '';

//Add listeners for all the various keys and for keystrokes
let 0 = document.getElementById('#number0');
let 1 = document.getElementById('#number1');
let 2 = document.getElementById('#number2');
let 3 = document.getElementById('#number3');
let 4 = document.getElementById('#number4');
let 5 = document.getElementById('#number5');
let 6 = document.getElementById('#number6');
let 7 = document.getElementById('#number7');
let 8 = document.getElementById('#number8');
let 9 = document.getElementById('#number9');

let minusButton = document.getElementById('#minus')

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

//