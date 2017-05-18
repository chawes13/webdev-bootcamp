//Annoy-omatic 

var notThere = true;
while(notThere){
	var userPrompt = prompt("Are we there yet?").toLowerCase();
	if(userPrompt.includes("yes") || userPrompt.includes("yeah")){
		notThere = false;
	}
}

alert("Yay, we finally made it!!");