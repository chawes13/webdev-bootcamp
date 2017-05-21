var button = document.querySelector("button");
var body = document.querySelector("body");
button.addEventListener("click", changeBackground);

function changeBackground(){
	body.classList.toggle("purple-bg");
}