let current_number_el = document.querySelector('#current_number');
let memoField = document.querySelector('#container2');
let result_el = document.querySelector('#result');
let previous_number = 0;
let current_number = 0;
let isNumberFirst = true;
let operator = '';

let playSound = () =>
	new Audio('https://www.soundjay.com/buttons/sounds/button-11.mp3').play();
let playSound2 = () =>
	new Audio('https://www.soundjay.com/buttons/sounds/button-13.mp3').play();
let playSound3 = () =>
	new Audio('https://www.soundjay.com/buttons/sounds/button-12.mp3').play();

function CreateCurrentInput() {
	let input = event.target.value;
	// concatinates currently inputed numbers
	current_number == 0
		? (current_number += parseInt(input))
		: (current_number += input);
	current_number_el.innerText = current_number;
}

function AddToPreviousNumber() {
	memoField.innerText += ' ' + current_number;
	previous_number += parseInt(current_number);
	isNumberFirst = false;
}

function DeductFromPreviousNumber() {
	if (isNumberFirst) {
		previous_number = current_number;
	} else {
		previous_number -= current_number;
	}
	memoField.innerText += ' ' + current_number;
	isNumberFirst = false;
}

function MultiplyFromPreviousNumber() {
	if (isNumberFirst) {
		previous_number = current_number;
	} else {
		previous_number *= current_number;
	}
	memoField.innerText += ' ' + current_number;
	isNumberFirst = false;
}

function DivideFromPreviousNumber() {
	if (isNumberFirst) {
		previous_number = current_number;
	} else {
		previous_number /= current_number;
	}
	memoField.innerText += ' ' + current_number;
	isNumberFirst = false;
}

function ResetCurrentInput() {
	current_number = 0;
}

function ResetPreviousInput() {
	previous_number = 0;
}

function CallAdditionOperand() {
	if (isNumberFirst) operator = 'toAdd';
	DoPreviousOperation();
	ResetCurrentInput();
	operator = 'toAdd';
	memoField.innerText += ' + ';
}

function CallDeductionOperand() {
	if (isNumberFirst) operator = 'toDeduct';
	DoPreviousOperation();
	ResetCurrentInput();
	operator = 'toDeduct';
	memoField.innerText += ' - ';
}

function CallMultiplicationOperand() {
	if (isNumberFirst) operator = 'toMultiply';
	DoPreviousOperation();
	ResetCurrentInput();
	operator = 'toMultiply';
	memoField.innerText += ' * ';
}

function CallDivisionOperand() {
	if (isNumberFirst) operator = 'toDivide';
	DoPreviousOperation();
	ResetCurrentInput();
	operator = 'toDivide';
	memoField.innerText += ' / ';
}

function DoPreviousOperation() {
	if (operator === 'toAdd') {
		AddToPreviousNumber();
		ResetCurrentInput();
	} else if (operator === 'toDeduct') {
		DeductFromPreviousNumber();
		ResetCurrentInput();
	} else if (operator === 'toMultiply') {
		MultiplyFromPreviousNumber();
		ResetCurrentInput();
	} else if (operator === 'toDivide') {
		DivideFromPreviousNumber();
		ResetCurrentInput();
	}
}

function CountResult() {
	DoPreviousOperation();
	result_el.innerText = previous_number;
	memoField.innerText += ' = ';
	memoField.innerText += ' ' + previous_number;
	memoField.innerText += '\n';
	operator = '';
	ResetCurrentInput();
	ResetPreviousInput();
	isNumberFirst = true;
}
