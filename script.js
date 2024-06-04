//Estabilish the global variables
let memory = {
    firstNumber: [],
    secondNumber: [],
    operator: '',
};
let result = 0

const SCREEN = document.querySelector('#screen');

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
    {origin: document.querySelector('#cancel'), value: 'C'},
];

//calculation functions

function sum (a, b) {
    return Number(a) + Number(b);
};

function minus (a, b) {
    return Number(a) - Number(b);
};

function multiply (a, b) {
    return Number(a) * Number(b);
};

function division (a, b) {
    return Number(a) / Number(b)
};

//Listeners

function numberListener (origin, number) {
    origin.addEventListener('click', function () {
        if (memory.operator.length == 0) {
            memory.firstNumber += number;
            return;
        } else {
            memory.secondNumber += number;
            return;
        };
    });
    screenUpdate(SCREEN);
}

function valueIdentifier (operatorArray) {
    switch(operatorArray) {
        case '+':
            if (result != 0) {
                memory.firstNumber = result;
                memory.secondNumber = '';
                memory.operator = '';
            } else if (result == 0) {
                result = sum(memory.firstNumber,memory.secondNumber);
            }
            break;
        case '-':
            if (result != 0) {
                memory.firstNumber = result;
                memory.secondNumber = '';
                memory.operator = '';
            } else {
                result = minus(memory.firstNumber,memory.secondNumber);
            };
            break
        case '*':
            if (result != 0) {
                memory.firstNumber = result;
                memory.secondNumber = '';
                memory.operator = '';
            } else {
                result = multiply(memory.firstNumber,memory.secondNumber);
            };
            break;
        case '/':
            if (result != 0) {
                memory.firstNumber = result;
                memory.secondNumber = '';
                memory.operator = '';
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
        } else if (memory.operator.length == 1) {
            if (operator = '=') {
                valueIdentifier(memory.operator);
                console.log(result);
                memory.firstNumber = result;
                result = '';
                memory.secondNumber = '';
                memory.operator = '';
                return
            } else {
                valueIdentifier(memory.operator)
                console.log(result)
                return
            }
        }
        screenUpdate(SCREEN);
    })
};

function specialListener(origin, operator) {
    origin.addEventListener('click', function () {
        if (operator == 'C') {
            memory.firstNumber = '';
            memory.secondNumber = '';
            memory.operator = '';
            result = '';
        } else {
            if (memory.operator == '') {
                memory.firstNumber += '.';
            } else if (memory.operator != '') {
                memory.secondNumber += '.'
            }
        };
        screenUpdate(SCREEN);
    })
};

//activate listeners
NUMBERS.forEach(item => numberListener(item.origin,item.value));
OPERATORS.forEach(item => operatorListener(item.origin,item.value));
SPECIALS.forEach(item => specialListener(item.origin,item.value));

//Appending elements to the screenSCREEN.textContent = `${memory.firstNumber} ${memory.operator} ${memory.secondNumber}  = ${result}`

function screenUpdate (screenId) {
    if (result == 0) {
        screenId.textContent = `${memory.firstNumber} ${memory.operator} ${memory.secondNumber}`;
        screenId.appendChild('#screen');
    } else if (memory.operator == '' || memory.operator == '=') {
        screenId.textContent = `= ${result}`;
        screenId.appendChild('#screen');
    }
}