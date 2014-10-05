$(document).ready(function() {
	


//add items to list hitting enter.
	$('#textbox').keydown(function(e){
		if(e.which == 13){
			var toAdd = $('input[name=todolistitem]').val();
			console.log(toAdd)
			$('.list').append('<li class=\"items\"><div class=\"checkbox\"></div><span class=\"todoitem\">' + toAdd + '</span><img class=\"delete\" src=\"images/delete-button.png\"></li>');
			$('input#textbox').val('');
		}
	});

//delete
	$('.list').on('click', '.delete', function (e) {
		e.preventDefault(); 
		$(this).parent().slideUp()
	});

//check off
	$('.list').on('click', 'li', function (){
		$(this).toggleClass('completed');
		$(this).children('.checkbox').toggleClass('checked');
	});
});
