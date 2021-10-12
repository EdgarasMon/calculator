//let result = document.querySelector('#result');
//let number_buttons = document.querySelectorAll('.number-button');
let previous_number = 0;
let current_number = 0;
let isNumberFirst = true;
let operator = '';

// concatinates currently inputed numbers
 function CreateCurrentInput() {
    let input = event.target.value;
    current_number == 0 ? current_number += parseInt(input) : current_number += input;
    console.log("current_number ", parseInt(current_number)); // paparsinau i int
}

function AddToPreviousNumber() {
    previous_number += current_number;  // blogai sujungia kai pridedam trecia skaiciu
    console.log(typeof(previous_number))
    console.log(typeof(current_number))
    isNumberFirst = false;
    console.log("previous_number inside AddToPreviousNumber() ", previous_number);
}

function DeductFromPreviousNumber() {
    if (isNumberFirst) {
        previous_number = current_number;
    } else {
        previous_number -= current_number;
    }
    isNumberFirst = false; 
    console.log("previous_number inside DeductFromPreviousNumber() ", previous_number);
}

function ResetCurrentInput() {
    current_number = '';
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
    var res = 0;
    if (operator == 'toAdd') {
       res = parseInt(previous_number) + parseInt(current_number);
    }
    else if (operator == 'toDeduct') {
        res = parseInt(previous_number) - parseInt(current_number);
    }

    console.log("result = ", res);
}