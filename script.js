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
            screenUpdate(SCREEN);
        } else {
            memory.secondNumber += number;
            screenUpdate(SCREEN);
        };
    });
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
        } else if (memory.operator.length == 1) {
            if (operator = '=') {
                valueIdentifier(memory.operator);
                console.log(result);
                memory.firstNumber = result;
                result = '';
                memory.secondNumber = '';
                memory.operator = '';
            } else {
                valueIdentifier(memory.operator)
                console.log(result)
            }
        };
        screenUpdate(SCREEN);
        return
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

//Appending elements to the screen

function screenUpdate (screenId) {
    screenId.textContent = `${memory.firstNumber} ${memory.operator} ${memory.secondNumber}`
}

//Keyboard functionality

function addKeyboardNumber (number) {
    if (memory.operator.length == 0) {
        memory.firstNumber += number;
        screenUpdate(SCREEN);
    } else {
        memory.secondNumber += number;
        screenUpdate(SCREEN);
    };
}

function addKeyboardOperator (operator) {
    if (memory.operator.length < 1) {
        memory.operator += operator;
    } else if (memory.operator.length == 1) {
        if (operator = '=') {
            valueIdentifier(memory.operator);
            console.log(result);
            memory.firstNumber = result;
            result = '';
            memory.secondNumber = '';
            memory.operator = '';
        } else {
            valueIdentifier(memory.operator)
            console.log(result)
        }
    };
    screenUpdate(SCREEN);
    return
}

function specialKeyboardListener (element) {
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
}

function keyboardListener(element) {
    element.addEventListener('keydown', function (event) {
        const key = event.key;
        switch(key) {
            case '0':
                addKeyboardNumber(0);
                break;
            case '1':
                addKeyboardNumber(1);
                break;
            case '2':
                addKeyboardNumber(2);
                break;
            case '3':
                addKeyboardNumber(3);
                break;
            case '4':
                addKeyboardNumber(4);
                break;
            case '5':
                addKeyboardNumber(5);
                break;
            case '6':
                addKeyboardNumber(6);
                break;
            case '7':
                addKeyboardNumber(7);
                break;
            case '8':
                addKeyboardNumber(8);
                break;
            case '9':
                addKeyboardNumber(9);
                break;
            case '+':
                addKeyboardOperator('+');
                break;
            case '-':
                addKeyboardOperator('-');
                break;
            case '*':
                addKeyboardOperator('*');
                break;
            case '/':
                addKeyboardOperator('/');
                break;
            case '=':
                addKeyboardOperator('=');
                break;
            case 'enter':
                addKeyboardOperator('=');
                break;
            case 'delete':
                memory.firstNumber = '';
                memory.secondNumber = '';
                memory.operator = '';
                screenUpdate(SCREEN);
                break;
            case 'C':
                memory.firstNumber = '';
                memory.secondNumber = '';
                memory.operator = '';
                screenUpdate(SCREEN);
                break; 
            case ',':
                if (memory.operator == '') {
                    memory.firstNumber += '.';
                } else if (memory.operator != '') {
                    memory.secondNumber += '.'
                }
                screenUpdate(SCREEN);
                break;
            case '.':
                if (memory.operator == '') {
                    memory.firstNumber += '.';
                } else if (memory.operator != '') {
                    memory.secondNumber += '.'
                };
                screenUpdate(SCREEN)
                break;
        }}
        )
    };

keyboardListener(document);