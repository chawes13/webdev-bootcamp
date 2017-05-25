var button = document.querySelector("button");
//Do NOT have to select the body, it is accessible directly from the document object
button.addEventListener("click", function(){
	document.body.classList.toggle("purple-bg");
});