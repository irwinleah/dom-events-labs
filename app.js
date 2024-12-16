/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstNumber = ''; // may or may not change
let operator = '';
let result = null;
let secondNumber = '';
let waitingForSecondNumber = false;
/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display'); //won't change

const numberButtons = document.querySelectorAll('.button');
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equals')
/*----------------------------- Event Listeners -----------------------------*/
// console.log(numberButtons)
numberButtons.forEach(button => {
    button.addEventListener('click', () => { //user interaction
        if (button.innerText === 'C') { //telling the c button what to do
            firstNumber = ''; 
            operator = '';
            result = null;
            secondNumber = '';
            display.innerText = '';
            return 
        }

        if (waitingForSecondNumber) {  // once you set the oeprator this becomes true, waits for the seocnd number
            display.innerText = button.innerText;
            waitingForSecondNumber = false;
        } else { // explains what happen swith zero value added or else add the operator to the end of the value
            display.innerText === '0' ? display.innerText = button.innerText : display.innerText += button.innerText;
        }
      // This log is for testing purposes to verify we're getting the correct value
    //   console.log(e.target.innerText)
    //   display.innerText = e.target.innerText
    
      // Future logic to capture the button's value would go here...

    });
  });
equalButton.addEventListener('click', () => { 
    if (firstNumber !== '' && operator !== '') { //because these are true we move on to the next line
        secondNumber = parseFloat(display.innerText); //this is going to make it a number, not a trign, so now we can math

        switch (operator) {
            case 'plus':
                result = parseFloat(firstNumber) + secondNumber;
                break;
            case 'minus':
                result = parseFloat(firstNumber) - secondNumber;
                break;
            case 'multiply':
                result = parseFloat(firstNumber) * secondNumber;
                break;
            case 'divide':
                result = parseFloat(firstNumber) / secondNumber;
                break;
            default:
                return;
        }
        console.log(result)
        display.innerText = result;
        firstNumber = ''; //reseting
        operator = '';
    }
})

  operatorButtons.forEach(button => {
      button.addEventListener('click', () => {
        // if (button.id === 'equals') {
        firstNumber = display.innerText;
       if (button.innerText === '+') {
        operator = 'plus'
       } else if (button.innerText === '-') {
        operator = 'minus'
       } else if (button.innerText === '*') {
        operator = 'multiply'
       } else if (button.innerText === '/'){
        operator = 'divide'
       }
        waitingForSecondNumber = true;
        //}
  });
});

//   event.target.classList.contains('number')
  
// const calculator = document.querySelector('#calculator');
// calculator.addEventListener('click', (event) => {
//   // This log is for testing purposes to verify we're getting the correct value
//   // You have to click a button to see this log
//   console.log(event.target.innerText);

//   // Example
//   if (event.target.classList.contains('number')) {
//     // Do something with a number
//   }

  // Example
//   if (event.target.innerText === '*') {
//     // Do something with this operator
//   }


/*-------------------------------- Functions --------------------------------*/
