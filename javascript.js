let result = document.querySelector('#result');
let number_buttons = document.querySelectorAll('.number-button');
let value = document.querySelector(".number-button");
let current_val = "";
let endNumber = "";

 function CreateCurrentInput(){
    let input = event.target.value;
    current_val += input; 
    console.log("current_val ",current_val);
    if (event.target.value != "+"){
        return endNumber = current_val += input; 
    }
}

 function Add(){
    console.log("Adding");
 }