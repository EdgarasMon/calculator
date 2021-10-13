//let result = document.querySelector('#result');
//let number_buttons = document.querySelectorAll('.number-button');
let previous_number = 0;
let current_number = 0;
let isNumberFirst = true;
let operator = '';

 function CreateCurrentInput() {
    let input = event.target.value;
    // concatinates currently inputed numbers
    current_number == 0 ? current_number += parseInt(input) : current_number += input; 
    console.log("current_number ", current_number);
}

function AddToPreviousNumber() {
    previous_number += parseInt(current_number);
    isNumberFirst = false; // CHECK IF ITS NEEDED
    console.log("previous_number inside AddToPreviousNumber() ", previous_number);
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
}

function ResetCurrentInput() {
    current_number = 0;
}

function Add() {
    AddToPreviousNumber();
    ResetCurrentInput();
    operator='toAdd';
    console.log("+")
 }

 function Deduct() {
    DeductFromPreviousNumber();
    ResetCurrentInput();
    operator='toDeduct';
    console.log("-")
 }

function CountResult() {
    if (operator === 'toAdd') {
        AddToPreviousNumber();
        ResetCurrentInput();
    }
    else if (operator === 'toDeduct') {
        DeductFromPreviousNumber();
        ResetCurrentInput();
    }
    console.log("result = ", previous_number);
}