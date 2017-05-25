var p1ScoreCard = document.querySelector("#p1score");
var p2ScoreCard = document.querySelector("#p2score");
var maxScoreDisplay = document.querySelector("#maxScore");
var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
var maxScore = numInput.valueAsNumber;
var gameOver = false;

document.querySelector("#p1").addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		p1ScoreCard.textContent = p1Score;
		if(p1Score === maxScore){
			gameOver = true;
			p1ScoreCard.classList.add("winner");
		}
	}
});

document.querySelector("#p2").addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		p2ScoreCard.textContent = p2Score;
		if(p2Score === maxScore){
			gameOver = true;
			p2ScoreCard.classList.add("winner");
		}
	}
});

document.querySelector("#reset").addEventListener("click", function(){
	resetGame();
});

//NOTE: The value of the input comes out as a string...This is why strict equality wasn't working
document.querySelector("input").addEventListener("change", function(){
	maxScore = this.valueAsNumber;
	maxScoreDisplay.textContent = maxScore;
	resetGame();
});

function resetGame(){
	p1Score = 0;
	p1ScoreCard.textContent = 0;
	p1ScoreCard.classList.remove("winner");
	p2Score = 0;
	p2ScoreCard.textContent = 0;
	p2ScoreCard.classList.remove("winner");
	gameOver = false;
}