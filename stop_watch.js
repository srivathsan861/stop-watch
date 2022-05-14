var sec = "00";
var min = "00";
var appendSec = document.getElementById('sec');
var appendMin = document.getElementById('min');
var buttonStart = document.getElementById('buttonStart');
var buttonStop = document.getElementById('buttonStop');
var buttonReset = document.getElementById('buttonReset');
var interval;

function startTimer(){
	sec++;
	if(sec < 9){
       appendSec.innerHTML = "0" + sec;
	}
	if(sec > 9){
		appendSec.innerHTML = sec;
	}
	if(sec >  100){
		min++;
		appendMin.innerHTML = "0" + min;
		sec = 0;
		appendSec.innerHTML = "0" + 0;
	}
	if(min > 9){
		appendMin.innerHTML = min;
	}
}

buttonStart.onclick = function(){
  interval = setInterval(startTimer,10);
};

buttonStop.onclick = function(){
	clearInterval(interval);
}

buttonReset.onclick = function(){
	clearInterval(interval);
	sec = "00";
	min = "00";
	appendSec.innerHTML = sec;
	appendMin.innerHTML = min;
}

