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
        if (memory.operator.length === 0) {
            memory.firstNumber.push(number); //push the used number to memory
        } else if (memory.operator.length != 0) {
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

function operatorChecker (usedOperator) {
    let result = '';
        switch (usedOperator) {
            case '+':
                result = sum(memory.firstNumber.map(Number), memory.secondNumber.map(Number))
                break;
            case '-':
                result = minus(memory.firstNumber.map(Number), memory.secondNumber.map(Number))
                break;
            case '*':
                result = multiply(memory.firstNumber.map(Number), memory.secondNumber.map(Number))
                break;
            case '/':
                result = divide(memory.firstNumber.map(Number), memory.secondNumber.map(Number))
                break;
            default:
                alert('Digit a number to start calculating!')
            }
    return result
}

function operatorListener (object) {
    object.origin.addEventListener('click', function () {
        if (memory.operator === '') {
            memory.operator = object.value
            return
        } else if (memory.operator != '') {
            console.log(operatorChecker(memory.operator));
            memory.operator = '';
            memory.firstNumber = [];
            memory.secondNumber = [];
            return
        }
    })
}

//set up listeners
NUMBERS.forEach(item => numberListener(item.origin, item.value)); //Number listener
OPERATORS.forEach(item => operatorListener(item)); //Operators listener