//Estabilish the global variables
let memory = {
    firstNumber: [],
    secondNumber: [],
    operator: '',
};

//Recall the numbers and operators for further use down the line

const NUMBERS = [
    {origin: document.querySelector('#number0'), value: 0},
    {origin: document.querySelector('#number1'), value: 1},
    {origin: document.querySelector('#number2'), value: 2},
    {origin: document.querySelector('#number3'), value: 3},
    {origin: document.querySelector('#number4'), value: 4},
    {origin: document.querySelector('#number5'), value: 5},
    {origin: document.querySelector('#number6'), value: 6},
    {origin: document.querySelector('#number7'), value: 7},
    {origin: document.querySelector('#number8'), value: 8},
    {origin: document.querySelector('#number9'), value: 9},
]

const OPERATORS = [
    {origin: document.querySelector('#plus'), value: '+'},
    {origin: document.querySelector('#minus'), value: '-'},
    {origin: document.querySelector('#multiplication'), value: '*'},
    {origin: document.querySelector('#divided'), value: '/'},
    {origin: document.querySelector('#equals'), value: '='},
]

const SPECIALS = [
    {origin: document.querySelector('#dot'), value: '.'},
    {origin: document.querySelector('#double0'), value: '00'}
]

function numberListener (object, number) {
    object.addEventListener('click', function () {
        if (memory.operator == '') {
            memory.firstNumber.push(number); //push the used number to memory
        } else if (memory.operator != '') {
            memory.secondNumber.push(number) //if there is an operator selected push to the second number
        } else {
            return alert('Critical memory error')
        }
        console.log(object);
        return
    })
}

function sum (firstNumber, secondNumber) {
    return firstNumber + secondNumber; //Function for sum
};
function minus (firstNumber, secondNumber) {
    return firstNumber - secondNumber; //Function for minus
};
function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber; //Function for multiply
};
function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber; //Function for division
};

function operatorListener (object, useddOperator) {
    object.addEventListener('click', function () {
        if (useddOperator == '') {
            operator = object.value;
            return
        } else if (useddOperator != '') {
            
        }
    })
}

function result(firstNumber, secondNumber, operator){
    if (operator == '+') {
    }
}

//set up listeners for the number values
NUMBERS.forEach(item => numberListener(item.origin, item.value));