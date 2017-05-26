var colours = [];
var isHard = true;
var answer = "";
var idToSelect = "";
var squares = "";

var modeToggle = document.querySelector("#mode");
var modeCells = document.querySelectorAll("#mode li");
var rgbTitle = document.querySelector("#rgbTitle");
var reset = document.querySelector("#reset>a");
var hardSquares = document.querySelector("#hard");
var result = document.querySelector("#result");

//Initialise gameboard
createGameboard();

function createGameboard(){
	idToSelect = isHard ? ".square" : "#easy .square";
	squares = document.querySelectorAll(idToSelect);
	generateColours();
	selectAnswer();
	setupSquares();
}

function generateColours(){
	while(colours.length < squares.length){
		var rgbString = "rgb(" + randomNum(255) + ", " + randomNum(255) + ", " + randomNum(255) + ")";
		if(colours.indexOf(rgbString) === -1){
			colours.push(rgbString);
		}
	}
	
}

function selectAnswer(){
	answer = colours[randomNum(squares.length)];
	rgbTitle.innerHTML = answer;
}

function setupSquares(){
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
		squares[i].addEventListener("click", squareAction);
	}
}

function randomNum(max){
	return Math.floor(Math.random()*max);
}

function playAgain(){
	colours = [];
	reset.innerHTML = "New Colours";
	result.innerHTML = "";
	createGameboard();
}

function squareAction(){
	if(this.style.backgroundColor === answer){
		result.innerHTML = "You won!";
		reset.innerHTML = "Play Again";
		for(var i=0; i < squares.length; i++){
			squares[i].style.backgroundColor = answer;
			squares[i].classList.remove("faded");
		}
	} else {
		this.classList.add("faded");
		result.innerHTML = "Try Again!";
	}
}

//Event Listeners

modeToggle.addEventListener("click", function(){
	isHard = !isHard;
	for(var i=0; i < modeCells.length; i++){
		modeCells[i].classList.toggle("active");
	}
	if(isHard){
		hardSquares.classList.remove("hidden");
	} else {
		hardSquares.classList.add("hidden");
	}
	playAgain();
});

reset.addEventListener("click", playAgain);



