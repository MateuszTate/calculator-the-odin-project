const modulo = function(numberOne, numberTwo){
    numberOne = numberOne.join('');
    numberTwo = numberTwo.join('');
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    let res = numberOne%numberTwo;
    res = parseFloat(res.toFixed(5));
    console.log(res);
    return (res);
}

const division = function(numberOne, numberTwo){
    numberOne = numberOne.join('');
    numberTwo = numberTwo.join('');
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    if(numberTwo===0) return 'You can not divide by 0!';
    if(numberTwo===0) console.log('You can not divide by 0!');
    let res = numberOne/numberTwo;
    res = parseFloat(res.toFixed(5));
    console.log(res);
    return (res);
}

const multiply = function(numberOne, numberTwo){
    numberOne = numberOne.join('');
    numberTwo = numberTwo.join('');
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    let res = numberOne*numberTwo;
    res = parseFloat(res.toFixed(5));
    console.log(res);
    return (res);
}

const subtraction = function(numberOne, numberTwo){
    numberOne = numberOne.join('');
    numberTwo = numberTwo.join('');
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    let res = numberOne-numberTwo;
    res = parseFloat(res.toFixed(5));
    console.log(res);
    return (res);
}

const add = function(numberOne, numberTwo){
    numberOne = numberOne.join('');
    numberTwo = numberTwo.join('');
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    let res = numberOne+numberTwo;
    res = parseFloat(res.toFixed(5));
    console.log(res);
    return (res);
}

const displayResult = document.querySelector('.result');
let numberOne = [];
let numberTwo = [];
let operatorClicked = false;
let whichOperator;

const enter = document.querySelector('.enter');
let showThis;

let numbers = document.querySelectorAll('.numbers');
numbers.forEach(function(numberButton) {
    numberButton.addEventListener('click', function() {
        if (!operatorClicked || numberOne.length == 0) {
            numberOne.push(this.value);
            console.log('one '+numberOne);
            operatorClicked = false;
            if(numberOne.length<25){
                showThis = numberOne.join('');
                enter.textContent = showThis;
            }
            
        } else {
            numberTwo.push(this.value);
            console.log('two '+numberTwo);
            if(numberTwo.length<25){
                showThis = numberTwo.join('');
                enter.textContent = showThis;
            }
        }
    });
});

let operators = document.querySelectorAll('.operators');
operators.forEach(function(operatorButton) {
    operatorButton.addEventListener('click', function() {
        if(numberOne.length>0 && numberOne.length<25){
        displayResult.textContent = numberOne.join('');
        }
        else if(numberOne.length>25){
            let copiedArray = numberOne.slice(0, 24);
            displayResult.textContent = copiedArray.join('');
        }
        
        operatorClicked = true;
        whichOperator = this.value;
    });
});


let enterClicked;

let equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    if(numberOne.length>0 || numberTwo.length>0){
    let result;
    switch(whichOperator){
        case '+':
            
            result = add(numberOne, numberTwo);
            numberOne = [];
            numberTwo = [];
            operatorClicked = false;
            break;
        case '-':
            
            result = subtraction(numberOne, numberTwo);
            numberOne = [];
            numberTwo = [];
            operatorClicked = false;
            break;
        case '*':
            
            result = multiply(numberOne, numberTwo);
            numberOne = [];
            numberTwo = [];
            operatorClicked = false;
            break;
        case '/':
            
            result = division(numberOne, numberTwo);
            numberOne = [];
            numberTwo = [];
            operatorClicked = false;
            break;
        case '%':
            
            result = modulo(numberOne, numberTwo);
            numberOne = [];
            numberTwo = [];
            operatorClicked = false;
            break;
    }
    
    enterClicked = true;
    result = result.toString();
    result=[...result];
    if(result[0]=='Y' || numberOne[0]=='Y'){
        numberOne = [];
        numberTwo = [];
        enter.textContent = 0;
        displayResult.textContent = 'You can not divide by 0!';
        operatorClicked = false;
        whichOperator = undefined;
        console.log(numberOne)
        console.log(numberTwo)
    }
    else{
    numberOne = result;
    console.log(numberOne);
    result = result.join('');
    result = result.toString();
    displayResult.textContent = result;
    enter.textContent = 0;
    }
    

    }
});

let ac = document.querySelector('.ac');
ac.addEventListener('click', function() {
    numberOne = [];
    numberTwo = [];
    enter.textContent = 0;
    displayResult.textContent = 0;
    operatorClicked = false;
    whichOperator = undefined;
    console.log(numberOne)
    console.log(numberTwo)
})

let del = document.querySelector('.del');
del.addEventListener('click', function(){
    if(!operatorClicked && numberOne.length>0){
        let popped = numberOne.pop();
        let test = [...numberOne];
        if(test.length>0){
        enter.textContent = numberOne;
        }
        else enter.textContent = 0;
        console.log('one ' + numberOne);
    }
    else if(operatorClicked && numberTwo.length>0){
        let popped = numberTwo.pop();
        let test = [...numberTwo];
        if(test.length>0){
        enter.textContent = numberTwo;
        }
        else enter.textContent = 0;
        console.log('two ' + numberTwo);
    }
})