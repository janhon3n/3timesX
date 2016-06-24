var soundfx = [];
soundfx.push(new Audio("soundfx.mp3"));
soundfx.push(new Audio("soundfx.mp3"));
soundfx.push(new Audio("soundfx.mp3"));
var nextSoundfx = 0;

function playSoundFx(){
	soundfx[nextSoundfx].pause();
	soundfx[nextSoundfx].currentTime = 1.1;
	soundfx[nextSoundfx].play();
	
	nextSoundfx += 1;
	if(nextSoundfx >= soundfx.length){
		nextSoundfx = 0;
	}
}