//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Delete todo by clicking "trash"
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
		//note - "this" refers to the parent object, as that's what fadeOut is getting called on
		$(this).remove();
	});
	event.stopPropagation();
});

//Add todos by hitting enter
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){		
		addTodo($(this).val());
		$(this).val("");
	}
});

//How to inherit binded events?
function addTodo(todoText){
	var newLi = '<li><span class="delete"><i class="fa fa-trash"></i></span> ' + todoText + "</li>";
	$("ul").append(newLi);
}

var inputVisible = true;

$(".fa-pencil").click(function(){
	$("input").fadeToggle();
});