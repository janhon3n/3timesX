$(document).ready(function(){
	
	function createXInput(number){
			var html = '<div xNumber="'+number+'" class="x_input">'+number+'<br><input name="x_input[]" type="text" placeholder="Enter a name..."></div>';
			return html;
	}

	function addXInput(number){
		$("#main_config").append(createXInput(number));
	}
	function removeXInput(){
		$("#main_config .x_input").last().remove();
	}
	
	function updateXCount(){
		var xCount = $("form input[name='x_count']").val();
		console.log(xCount);
		var currentXCount = parseInt($("#main_config").attr("x_count"));
		if(xCount > currentXCount){
			for(var i = currentXCount + 1; i <= xCount; i++){
				addXInput(i);
			}
		} else if(xCount < currentXCount){
			for(var i = currentXCount; i > xCount; i--){
				removeXInput();
			}
		}
		$("#main_config").attr("x_count", xCount);
	}
	
	
	//advanced config toggle
	$("#advanced_config #advanced_expander").click(function(){
		$("#advanced_config #advanced_content").slideToggle(100);
	});
	
	//setup the x_inputs changing functionality
	$("form input[name='x_count']").change(function(){
		updateXCount();
	});
	updateXCount();


	$("div.submitLink").click(function(){
		if($(this).attr("new_window") == 1){

			} else {
				var html = "";
				$("form .x_input").each(function(index){
					var name = $(this).find("input").val();
					html += '<div class="xShow" xNumber="'+index+'"><svg><line x1="5%" y1="5%" x2="95%" y2="95%"></svg>'+name+'</div>';
				});
				$("body").html(html);
			}
	});
});