var colours = [];
var isHard = true;
var answer = "";
var numSquares = 0;

var squares = document.querySelectorAll(".square");
var rgbTitle = document.querySelector("#rgbTitle");
var reset = document.querySelector("#reset");
var hardSquares = document.querySelector("#hard");
var result = document.querySelector("#result");
var boardDisplay = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

//Initialise the gameboard - default of Hard with 6 squares
init();

function init(){
	createGameboard();
	reset.addEventListener("click", playAgain);
	setupModeButtons();
}

function setupModeButtons(){
	for(var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			isHard = this.textContent.toLowerCase() === "hard";
			modeButtons[0].classList.remove("active");
			modeButtons[1].classList.remove("active");
			this.classList.add("active");
			playAgain();
		});
	}
}

function createGameboard(){
	numSquares = isHard ? 6 : 3;
	generateColours();
	selectAnswer();
	setupSquares();
}

function generateColours(){
	while(colours.length < numSquares){
		var rgbString = "rgb(" + randomNum(256) + ", " + randomNum(256) + ", " + randomNum(256) + ")";
		//Avoid the very rare edge case of adding duplicate colours
		if(colours.indexOf(rgbString) === -1){
			colours.push(rgbString);
		}
	}
	
}

function selectAnswer(){
	answer = colours[randomNum(numSquares)];
	rgbTitle.innerHTML = answer;
}

function setupSquares(){
	for(var i=0; i < squares.length; i++){
		//if the array has an element at the index, it will return true
		if(colours[i]){
			squares[i].style.display = "";
			squares[i].style.backgroundColor = colours[i];
			squares[i].addEventListener("click", function(){
				this.style.backgroundColor === answer ? correctGuess() : incorrectGuess(this);
			});
		} else {
			squares[i].style.display = "none";
		}
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

function correctGuess(){
	boardDisplay.style.backgroundColor = answer;
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = answer;
	}
	result.textContent = "You won!";
	reset.textContent = "Play Again?";	
}

function incorrectGuess(square){
	square.style.backgroundColor = "";
	result.textContent = "Try Again!";
}