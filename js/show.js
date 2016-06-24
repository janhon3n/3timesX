$(document).ready(function(){
	var xCount = parseInt($("#xShows").attr("xcount"));

	function fixVerticalAlign(){
		var xShowsHeight = parseInt($("#xShows").height());
		var windowHeight = parseInt($(document).height());
		console.log(xShowsHeight);
		console.log(windowHeight);
		$("#xShows").css("margin-top", (windowHeight / 2) - (xShowsHeight / 2));
	}
	
	$(window).resize(function(){
		fixVerticalAlign();
	});
	
	fixVerticalAlign();
	
	function toggleActivateX(index){
		var activeStatus = $("#xShows .xShow:nth-child("+(index)+")").attr("activated");
		console.log(activeStatus);
		if(activeStatus == "activated"){
			deactivateX(index);
		} else {
			activateX(index);
		}
	}
	
	function activateX(index){
		$("#xShows .xShow:nth-child("+(index)+")").attr("activated", "activated");
		if(typeof(playSoundFx) == "function"){
			playSoundFx();
		}
	}
	function deactivateX(index){
		$("#xShows .xShow:nth-child("+(index)+")").attr("activated", "no");
	}
	
	function deactivateAll(){
		for(var i = 1; i <= xCount; i++){
				deactivateX(i);
		}
	}
	

	
	var keyboardCodesStart = 49;
	$(document).keypress(function(e){
		if(e.which >= keyboardCodesStart && e.which < keyboardCodesStart+xCount){
			toggleActivateX(e.which - keyboardCodesStart + 1);
		} else if(e.keyCode === 0 || e.keyCode === 32){
			deactivateAll();
		}
	});
});