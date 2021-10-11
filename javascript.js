let result = document.querySelector('#result');
let number_buttons = document.querySelectorAll('.number-button');
let current_val = "";
let full_number = "";

 function CreateCurrentInput() {
    let input = event.target.value;
    current_val += input; 
    console.log("current_val ",current_val);
}

function ResetCurrentInput() {
    console.log("ResetCurrentInput")
}

 function Add() {
    console.log("Adding");
    ResetCurrentInput();
 }