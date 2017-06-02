// Set rover position and direction
var rover = {
	position: [0, 0],
	direction: 'N'
}

var previousPositionX = rover.position[0];
var previousPositionY = rover.position[1];
var previousDirection = rover.direction;

// Set obstacle
var obstacle = {
	position: [5, 5]
}

// Update rover position and direction
function updatePosition(){
	document.getElementById('position').innerHTML = 'New rover position: ['+ rover.position[0] +', '+ rover.position[1] +'], Direction: '+ rover.direction;
}

// Check for collision: take rover position and compare with obstacle position
function checkCollision(){
	if (rover.position[0] == obstacle.position[0] && rover.position[1] == obstacle.position[1]) {
		alert('Collision at ['+ obstacle.position[0] +', '+ obstacle.position[1] +']. Rover returns to ['+ previousPositionX +', '+ previousPositionY +'].');
		rover.position[0] = previousPositionX;
		rover.position[1] = previousPositionY;
		rover.direction = previousDirection;
		updatePosition();
	} else {
		updatePosition();
		document.getElementById('instructions').value = '';
	}
}

// Check rover position
function checkPosition(){
	if (rover.position[0] > 10) {
		rover.position[0] = 0;
	}

	if (rover.position[0] < 0) {
		rover.position[0] = 10;
	}

	if (rover.position[1] > 10) {
		rover.position[1] = 0;
	}

	if (rover.position[1] < 0) {
		rover.position[1] = 10;
	}
}

// Functions to move rover
function goForward(){
	switch(rover.direction){
		case 'N':
			rover.position[0] ++;
			checkPosition();
			break;
		case 'E':
			rover.position[1] ++;
			checkPosition();
			break;
		case 'S':
			rover.position[0] --;
			checkPosition();
			break;
		case 'W':
			rover.position[1] --;
			checkPosition();
			break;
	}
}

function goBackward(){
	switch(rover.direction){
		case 'N':
			rover.position[0] --;
			checkPosition();
			break;
		case 'E':
			rover.position[1] --;
			checkPosition();
			break;
		case 'S':
			rover.position[0] ++;
			checkPosition();
			break;
		case 'W':
			rover.position[1] ++;
			checkPosition();
			break;
	}
}

function goLeft(){
	switch(rover.direction){
		case 'N':
			rover.direction = 'W';
			break;
		case 'E':
			rover.direction = 'N';
			break;
		case 'S':
			rover.direction = 'E';
			break;
		case 'W':
			rover.direction = 'S';
			break;
	}
}

function goRight(){
	switch(rover.direction){
		case 'N':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'N';
			break;
	}
}

// Reset position and direction
function reset() {
	rover.position[0] = 0;
	rover.position[1] = 0;
	rover.direction = 'N';
	document.getElementById('position').innerHTML = 'New rover position: ['+ rover.position[0] +', '+ rover.position[1] +'], Direction: '+ rover.direction;
	document.getElementById('instructions').value = '';
}

// Move rover
function move(){
	var instructions = document.getElementById('instructions').value;

	if (instructions != '') {
		previousPositionX = rover.position[0];
		previousPositionY = rover.position[1];
		previousDirection = rover.direction;

		for (i = 0; i < instructions.length; i++) {
			switch(instructions[i]) {
				case 'f':
					goForward();
					break;
				case 'b':
					goBackward();
					break;
				case 'l':
					goLeft();
					break;
				case 'r':
					goRight();
					break;
				default:
					alert('Instructions "'+ instructions[i] +'" unknown.');
			}
		}

		checkCollision();
	} else {
		alert('Please enter rover instructions.');
	}
}
