//let result = document.querySelector('#result');
//let number_buttons = document.querySelectorAll('.number-button');
let previous_number = "";
let current_number = "";
let operator = '';

// concatinates currently inputed numbers
 function CreateCurrentInput() {
    let input = event.target.value;
    current_number += input; 
}

function SetPreviousNumber() {
    previous_number = current_number;   
}

function ResetCurrentInput() {
    current_number = '';
}

function Add() {
    SetPreviousNumber();
    ResetCurrentInput();
    operator='toAdd';
 }

 function CountResult() {
    var res = 0;
    if (operator == 'toAdd') {
       res = parseInt(previous_number) + parseInt(current_number);
    }
    console.log("res  ", res);
}

 