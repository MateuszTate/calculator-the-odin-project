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
      if (!operatorClicked || numberOne.length === 0) {
        if (this.value === '.' && numberOne.includes('.')) {
          return;
        }
        numberOne.push(this.value);
        console.log('one ' + numberOne);
        operatorClicked = false;
        if (numberOne.length < 25) {
          showThis = numberOne.join('');
          enter.textContent = showThis;
        }
      } else {
        if (this.value === '.' && numberTwo.includes('.')) {
          return;
        }
        numberTwo.push(this.value);
        console.log('two ' + numberTwo);
        if (numberTwo.length < 25) {
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
    enterClicked = false;
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
    if(!operatorClicked && numberOne.length>0 && !enterClicked){
        let popped = numberOne.pop();
        let test = [...numberOne];
        if(test.length>0){
        enter.textContent = numberOne.join('');
        }
        else enter.textContent = 0;
        console.log('one ' + numberOne);
    }
    else if(operatorClicked && numberTwo.length>0){
        let popped = numberTwo.pop();
        let test = [...numberTwo];
        if(test.length>0){
        enter.textContent = numberTwo.join('');
        }
        else enter.textContent = 0;
        console.log('two ' + numberTwo);
    }
})

let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';

    setTimeout(function() {
      button.style.backgroundColor = '';
      button.style.color = '';
    }, 75);
  });
});




document.addEventListener('keydown', function(event) {
    const key = event.key;
  
    if (key === '1') {
      const button = document.querySelector('.numbers[value="1"]');
      button.click();
    } else if (key === '2') {
      const button = document.querySelector('.numbers[value="2"]');
      button.click();
    } else if (key === '3') {
      const button = document.querySelector('.numbers[value="3"]');
      button.click();
    } else if (key === '4') {
      const button = document.querySelector('.numbers[value="4"]');
      button.click();
    } else if (key === '5') {
      const button = document.querySelector('.numbers[value="5"]');
      button.click();
    }
    else if (key === '6') {
        const button = document.querySelector('.numbers[value="6"]');
        button.click();
    } else if (key === '7') {
    const button = document.querySelector('.numbers[value="7"]');
    button.click();
    } else if (key === '8') {
    const button = document.querySelector('.numbers[value="8"]');
    button.click();
    } else if (key === '9') {
    const button = document.querySelector('.numbers[value="9"]');
    button.click();
    } else if (key === '0') {
    const button = document.querySelector('.numbers[value="0"]');
    button.click();
    }
    else if (key === ',' || key === '.') {
    const button = document.querySelector('.numbers[value="."]');
    button.click();
    }

    else if (key === 'Enter' || key === '=') {
        const button = document.querySelector('.equal');
        button.click();
      }

      else if (key === '+' && event.shiftKey) {
        const button = document.querySelector('.operators[value="+"]');
        button.click();
      }
      else if (key === '-') {
        const button = document.querySelector('.operators[value="-"]');
        button.click();
      }

      else if (key === '*' && event.shiftKey) {
        const button = document.querySelector('.operators[value="*"]');
        button.click();
      }
      else if (key === '/') {
        event.preventDefault()
        const button = document.querySelector('.operators[value="/"]');
        button.click();
      }
      else if (key === '%' && event.shiftKey) {
        const button = document.querySelector('.operators[value="%"]');
        button.click();
      }
      else if (key === 'c') {
        const button = document.querySelector('.ac[value="ac"]');
        button.click();
      }
      else if (key === 'Backspace') {
        const button = document.querySelector('.del[value="del"]');
        button.click();
      }

  });
  