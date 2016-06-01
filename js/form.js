$(document).ready(function(){
	
	function updateForm(){
		var xCount = $("form input#xCount").val();
		var html = '';
		for(var i = 0; i < xCount; i++){
			html += createXInput();
		}
		$("form div#xInputs").html(html);
	}

	function createXInput(){
			var html = '<div class="xInput"><input type="text" placeholder="Enter a name..."></div>';
			return html;
	}
	
	$("form input#xCount").change(function(){
		updateForm();
	});
	
	$("div.submitLink").click(function(){
			if($(this).attr("new_window") == 1){
				console.log("new");
			} else {
				console.log("old");
			}
	});

	updateForm();
		
});