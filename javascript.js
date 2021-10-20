let current_number_el = document.querySelector('#current_number');
let memoField = document.querySelector('#container2'); 
let result_el = document.querySelector('#result');
let previous_number = 0;
let current_number = 0;
let isNumberFirst = true;
let operator = '';

let playSound = () => new Audio("https://www.soundjay.com/buttons/sounds/button-11.mp3").play()
let playSound2 = () => new Audio("https://www.soundjay.com/buttons/sounds/button-13.mp3").play()
let playSound3 = () => new Audio("https://www.soundjay.com/buttons/sounds/button-12.mp3").play()


 function CreateCurrentInput() {
    let input = event.target.value;
    // concatinates currently inputed numbers
    current_number == 0 ? current_number += parseInt(input) : current_number += input;    
    console.log("previous_number ", previous_number); 
    console.log("current_number ", current_number);
    current_number_el.innerText = current_number;
    memoField.innerText += current_number;
}

function AddToPreviousNumber() {
    console.log("current_number inside AddToPreviousNumber() ", current_number);  
    console.log("previous_number inside AddToPreviousNumber() ", previous_number);  
    previous_number += parseInt(current_number);
    isNumberFirst = false;
    console.log("previous_number inside AddToPreviousNumber() ", previous_number);
    //memoField.innerText += ' + '; 
}

function DeductFromPreviousNumber() {
    console.log("previous_number D() ", previous_number);
    if (isNumberFirst) {
        previous_number = current_number;
    } else {
        previous_number -= current_number;
    }
    isNumberFirst = false; 
    console.log("previous_number D() ", previous_number);
    //memoField.innerText += ' - ';
}

function MultiplyFromPreviousNumber() {
    console.log("previous_number D() ", previous_number);
    if (isNumberFirst) {
        previous_number = current_number;
    } else {
        previous_number *= current_number;
    }
    isNumberFirst = false; 
    console.log("previous_number D() ", previous_number);
    //memoField.innerText += ' * ';
}

function DivideFromPreviousNumber() {
    console.log("previous_number D() ", previous_number);
    if (isNumberFirst) {
        previous_number = current_number;
    } else {
        previous_number /= current_number;
    }
    isNumberFirst = false; 
    console.log("previous_number D() ", previous_number);
    //memoField.innerText += ' / ';
}

function ResetCurrentInput() {
    current_number = 0;
}

function ResetPreviousInput() {
    previous_number = 0;
}

function CallAdditionOperand() {
    if (isNumberFirst) operator='toAdd'; 
    DoPreviousOperation();
    ResetCurrentInput();
    operator='toAdd';
    console.log("+")
    memoField.innerText += ' + ';    
 }

 function CallDeductionOperand() {
    if (isNumberFirst) operator='toDeduct'; 
    DoPreviousOperation();
    ResetCurrentInput();
    operator='toDeduct';
    console.log("-")
    memoField.innerText += ' - ';
 }

 function CallMultiplicationOperand() {
    if (isNumberFirst) operator='toMultiply'; 
    DoPreviousOperation();
    ResetCurrentInput();
    operator='toMultiply';
    console.log("*")
    memoField.innerText += ' * ';
 }

 function CallDivisionOperand() {
    if (isNumberFirst) operator='toDivide'; 
    DoPreviousOperation();
    ResetCurrentInput();
    operator='toDivide';
    console.log("/")
    memoField.innerText += ' / ';
 }

function DoPreviousOperation() {
    if (operator === 'toAdd') {
        console.log("DoPreviousOperation - toAdd");
        AddToPreviousNumber();
        ResetCurrentInput();
    }
    else if (operator === 'toDeduct') {
        console.log("DoPreviousOperation - toDeduct");
        DeductFromPreviousNumber();
        ResetCurrentInput();
    }
    else if (operator === 'toMultiply'){
        console.log("DoPreviousOperation - toMultiply");
        MultiplyFromPreviousNumber();    
        ResetCurrentInput();
    }
    else if (operator === 'toDivide'){
        console.log("DoPreviousOperation - toDivide");
        DivideFromPreviousNumber();    
        ResetCurrentInput();
    }
}

function CountResult() {
    DoPreviousOperation();
    console.log("result = ", previous_number);
    result_el.innerText = previous_number;
    memoField.innerText += ' = ';
    memoField.innerText += previous_number;
    memoField.innerText += "\n";
    ResetCurrentInput(); //naujai
    ResetPreviousInput(); // naujai

    //let memField = [];
    //memField.push(String(CreateCurrentInput()));
    //console.log("labas", memField)
    //memoField.innerText = memField; // memo laukui

}