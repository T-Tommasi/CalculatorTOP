//Estabilish the global variables
let memory = {
    firstNumber: [],
    secondNumber: [],
    operator: '',
};
let result = ''

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
];

const OPERATORS = [
    {origin: document.querySelector('#plus'), value: '+'},
    {origin: document.querySelector('#minus'), value: '-'},
    {origin: document.querySelector('#multiplication'), value: '*'},
    {origin: document.querySelector('#divided'), value: '/'},
    {origin: document.querySelector('#equals'), value: '='},
];

const SPECIALS = [
    {origin: document.querySelector('#dot'), value: '.'},
    {origin: document.querySelector('#double0'), value: '00'}
];

//calculation functions

function sum (a, b) {
    let result = Number(a) + Number(b);
    console.log(result);
    return result
};

function minus (a, b) {
    let result = Number(a) - Number(b);
    console.log(result);
    return result
};

function multiply (a, b) {
    let result = Number(a) * Number(b);
    console.log(result);
    return result
};

function division (a, b) {
    let result = Number(a) / Number(b);
    console.log(result);
    return result
};

//Listeners

function numberListener (origin, number) {
    origin.addEventListener('click', function () {
        if (memory.operator.length == 0) {
            memory.firstNumber.push(number);
            return;
        } else {
            memory.secondNumber.push(number);
            return;
        }
    })
}

function valueIdentifier (operatorArray) {
    switch(operatorArray) {
        case '+':
            if (result != 0) {
                result += sum(memory.firstNumber,memory.secondNumber);
            } else if (result == 0) {
                result = sum(memory.firstNumber,memory.secondNumber);
            }
            break;
        case '-':
            if (result != 0) {
                result -= minus(memory.firstNumber,memory.secondNumber);
            } else {
                result = minus(memory.firstNumber,memory.secondNumber);
            };
            break
        case '*':
            if (result != 0) {
                result *= multiply(memory.firstNumber,memory.secondNumber);
            } else {
                result = multiply(memory.firstNumber,memory.secondNumber);
            };
            break;
        case '/':
            if (result != 0) {
                result /= division(memory.firstNumber,memory.secondNumber);
            } else {
                result = division(memory.firstNumber,memory.secondNumber);
            }
        break;
    }
}

function operatorListener (origin, operator) {
    origin.addEventListener('click', function () {
        if (memory.operator.length < 1) {
            memory.operator += operator;
            return
        } else if (memory.operator.length >= 3) {
            valueIdentifier(memory.operator[0])
            return
        }
    })
}

//activate listeners
NUMBERS.forEach(item => numberListener(item.origin,item.value));
OPERATORS.forEach(item => operatorListener(item.origin,item.value));