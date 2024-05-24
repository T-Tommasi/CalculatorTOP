//Variables for showing the results on the calculator
const plus = '+';
const minus = '-';
const multiply = '*';
const divisionSign = '/';
let numberA = '';
let numberB = '';

//Get the various numerical buttons
let buttonZero = document.getElementById('#button0');
let buttonOne = document.getElementById('#button1');
let buttonTwo = document.getElementById('#button2');
let buttonThree = document.getElementById('#button3');
let buttonFour = document.getElementById('#button4');
let buttonFive = document.getElementById('#button5');
let buttonSix = document.getElementById('#button6');
let buttonSeven = document.getElementById('#button7');
let buttonEight = document.getElementById('#button8');
let buttonNine = document.getElementById('#button9');

//Add eventListener for click on all the elements before
buttonZero.addEventListener('click', function () {
    addNumberToMemory(0);
});
buttonOne.addEventListener('click', function () {
    addNumberToMemory(1);
});
buttonTwo.addEventListener('click', function () {
    addNumberToMemory(2);
});
buttonThree.addEventListener('click', function () {
    addNumberToMemory(3);
});
buttonFour.addEventListener('click', function () {
    addNumberToMemory(4);
});
buttonFive.addEventListener('click', function () {
    addNumberToMemory(5);
});
buttonSix.addEventListener('click', function () {
    addNumberToMemory(6);
});
buttonSeven.addEventListener('click', function () {
    addNumberToMemory(7);
});
buttonEight.addEventListener('click', function () {
    addNumberToMemory(8);
});
buttonNine.addEventListener('click', function () {
    addNumberToMemory(9);
});

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