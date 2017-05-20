//Using prompts and alerts (no DOM manipulation)

var run = true;
var todoList = [];

while(run){
	var action = prompt("What would you like to do?").toLowerCase();

	switch(action){
		case "new":
			var newItem = prompt("Please input your todo");
			todoList.push(newItem);
			break;
		case "list":
			console.log(todoList.toString());
			break;
		case "quit":
			run = false;
			break;
		default:
			alert("Sorry that action isn't supported!");
	}
}