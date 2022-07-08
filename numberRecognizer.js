let number = '';

'use strict'

function responseTest() {
	const request = new XMLHttpRequest();

	request.open("GET", "http://localhost:8000/", true);
	request.send(null);
}

document.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		responseTest();

		/*
		if (number === '') {
			showNumber(7);
		} else {
			checkNumber();
		}
		*/
	}
});

let accuracy = 0;

let passed = 0;
let failed = 0;

function showNumber(amountDigits) {
	while (amountDigits--) {
		number += Math.floor(Math.random() * 10);
	}

	showField.textContent = number;

	setTimeout(() => {
		showField.textContent = '';
		inputField.focus();
	}, 250);
}

function checkNumber() {
	let state = '';
	if (number === inputField.value) {
		passed++;
		state = 'green';
	} else {
		failed++;
		state = 'red';
	}

	// legElement
	let logElement = document.createElement('div');
	let expectedP = document.createElement('p');
	let receivedP = document.createElement('p');
	let dateP = document.createElement('p');

	logElement.className = 'logElement';
	expectedP.className = 'expectedP';
	receivedP.className = 'receivedP';
	dateP.className = 'dateP';

	// values
	expectedP.textContent = number;

	receivedP.textContent = inputField.value;
	receivedP.style.color = state;

	const today = new Date();
	dateP.textContent = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

	logElement.append(expectedP, receivedP, dateP);

	log.insertBefore(logElement, log.children[1]);

	// amount Display
	passedAmount.textContent = passed;
	failedAmount.textContent = failed;
	totalAmount.textContent = passed + failed;

	// accuracy
	currentProzent.textContent = Math.round(passed / (passed + failed) * 100) + '%';

	//border input
	inputField.style.borderWidth = '10px';
	inputField.style.borderColor = state;

	number = '';
	inputField.value = '';
}

function save() {
}
