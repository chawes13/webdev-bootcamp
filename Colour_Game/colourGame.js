var colours = [];
var isHard = true;
var answer = "";
var idToSelect = "";
var squares = "";

var modeToggle = document.querySelector("#mode");
var modeCells = document.querySelectorAll("#mode button");
var rgbTitle = document.querySelector("#rgbTitle");
var reset = document.querySelector("#reset");
var hardSquares = document.querySelector("#hard");
var result = document.querySelector("#result");
var boardDisplay = document.querySelector("h1");

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
		var rgbString = "rgb(" + randomNum(256) + ", " + randomNum(256) + ", " + randomNum(256) + ")";
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
	reset.textContent = "New Colours";
	result.textContent = "";
	boardDisplay.style.backgroundColor = "";
	createGameboard();
}

function squareAction(){
	if(this.style.backgroundColor === answer){
		boardDisplay.style.backgroundColor = answer;
		for(var i=0; i < squares.length; i++){
			squares[i].style.backgroundColor = answer;
		}
		result.textContent = "You won!";
		reset.textContent = "Play Again";
	} else {
		this.style.backgroundColor = "#232323";
		result.textContent = "Try Again!";
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



