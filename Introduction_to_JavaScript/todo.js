//Using prompts and alerts (no DOM manipulation)

var run = true;
var todoList = [];

while(run){
	var action = prompt("What would you like to do?").toLowerCase();

	switch(action){
		case "new":
			addItem();
			break;
		case "list":
			printTodoList();
			break;
		case "delete":
			deleteItem();
			break;
		case "quit":
			run = false;
			break;
		default:
			alert("Sorry that action isn't supported!");
	}
}

function printTodoList(){
	console.log("**********");
	todoList.forEach(function(item, index){
		console.log(index + ": " + item);
	});
	console.log("**********");
}

//Refactoring code for readability
function addItem(){
	var newItem = prompt("Please input your todo");
	todoList.push(newItem);
	console.log("'" + newItem + "' added to the list");
}

function deleteItem(){
	printTodoList();
	var indexToDelete = prompt("Which todo would you like to delete?");
	var deletedItem = todoList.splice(indexToDelete, 1);
	console.log("'"+ deletedItem + "' successfully deleted");
}
