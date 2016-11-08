$( document ).ready(() => {

	// Get all tasks
	$("#getTasksBtn").click(() => {
		getTasks();
	});

	// // Add new task
	// $("#addTaskBtn").click(() => {
	// 	addTask();
	// });

	//
	$('body').on('click', '.deleteTask', (e) => {
		let $li = $(e.target).parent();
		let taskId = $li.attr('id');

		removeTaskById(taskId);
		getTasks();
	});

	//
	function getTasks() {
		$.ajax({
			url: `/data`
		})
		.done(function( aTasks ) {
			
			var nameTasks = aTasks.map( task => `
				<li id="${task.id}"> ${task.description} => State: ${task.done} 
					<button type="button" class="deleteTask btn btn-primary">Delete</button>
				</li>`);

			$("#tasks").html( nameTasks.join('') );

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

	// 
	function removeTaskById(taskId) {
		$.ajax({
			url: `/data/${taskId}`,
			method: 'DELETE'

		}).success((response) => {
			console.log('success', response);

		}).error((error) => {
			console.log('error', error);
		});
	}
});
