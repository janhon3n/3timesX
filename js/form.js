$(document).ready(function(){
	
	function createXInput(number){
			var html = '<div xNumber="'+number+'" class="xInput">'+number+'<br><input name="xInput[]" type="text" placeholder="Enter a name..."></div>';
			return html;
	}

	function addXInput(number){
		$("form #xInputs").append(createXInput(number));
	}
	function removeXInput(){
		$("form #xInputs .xInput").last().remove();
	}
	
	function updateXCount(){
		var xCount = $("form input#xCount").val();
		var currentXCount = parseInt($("form #xInputs").attr("xCount"));
		if(xCount > currentXCount){
			for(var i = currentXCount + 1; i <= xCount; i++){
				addXInput(i);
			}
		} else if(xCount < currentXCount){
			for(var i = currentXCount; i > xCount; i--){
				removeXInput();
			}
		}
		$("form #xInputs").attr("xCount", xCount);
	}
	
	
	//setup the xInputs changing functionality
	
	
	$("form input#xCount").change(function(){
		updateXCount();
	});
	updateXCount();


	$("div.submitLink").click(function(){
		if($(this).attr("new_window") == 1){

			} else {
				var html = "";
				$("form .xInput").each(function(index){
					var name = $(this).find("input").val();
					html += '<div class="xShow" xNumber="'+index+'"><svg><line x1="5%" y1="5%" x2="95%" y2="95%"></svg>'+name+'</div>';
				});
				$("body").html(html);
			}
	});
});