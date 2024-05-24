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