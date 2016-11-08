$("#task_form").on('submit', (event) => {

	event.preventDefault();


	$.ajax({
		url: `/data`
	})
	.done(function( aTasks ) {
		
		var nameTasks = aTasks.map( task => `<li id="${task.id}"> ${task.description} => State: ${task.done} 
			</li> <button type="button" class="deleteTask btn btn-primary">Delete</button>` )
		$("#tasks").html( nameTasks.join('') )

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

});



