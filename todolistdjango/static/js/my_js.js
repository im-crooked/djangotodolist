
// to strike the todo
$("ul").on("click","li",function () {
	// body...
	$(this).toggleClass("strike");
});


// to delete the todo
$("ul").on("click","span",function (event) {
	// body...
	$(this).parent().fadeOut(500, function () {
		// body...
		$(this).remove();
	});
	event.stopPropagation();
});

// to add a todo
$("input[type='text']").keypress(function (event) {
	// body...
	if (event.which === 13) {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy;
		var val = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span><i class=\"fas fa-trash-alt\"></i></span> "+val+"<div class=\"date\">"+today+"</div></li>");
	}
});

//to hide and unhide the input

$("#plus").on("click",function () {
	// body...
	$("input").toggleClass("inputDisplay");
})