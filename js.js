function go(ball){
	var top_value = window.getComputedStyle(ball).top;
	var top_value_length = top_value.length;
	top_value = Number(top_value.substr(0, top_value_length - 2)) - 200;
	
	var height_value = window.getComputedStyle(ball).height;
	var height_value_length = height_value.length;
	height_value = Number(height_value.substr(0, height_value_length - 2));
	
	
	if(top_value-height_value <= 0) {
		ball.style.top = String(height_value)+"px";
		ball.children[0].innerHTML = "OUT!";
		ball.style.animation = "none";
	}
	else 
		ball.style.top = String(top_value)+"px";
}

function falldown(ball) {
	ball.style.transition = "top 1s 1s";
	ball.style.top = "100%";
	ball.setAttribute("onmouseover",null);
	toogle = 0;
}

function catched(ball) {
	var result = ball.children[0];
	if(result.innerHTML=="") {
		result.innerHTML = "WIN!";
		ball.style.animation = "narrow-ball 1s 1s both";
		falldown(ball);
	}
}

toogle = 0;
window.onload = function() {
	setInterval(function() {
		var ball = document.getElementById('ball');
		var top_value = window.getComputedStyle(ball).top;
		var height_value = window.getComputedStyle(ball).height;
		
		var play_ground = document.getElementById('play_ground');
		var play_ground_height = window.getComputedStyle(play_ground).height;
		
		if(top_value==height_value) {
			falldown(ball);
		}
		else if(top_value==play_ground_height) {
			if(toogle==0) {
				var result = ball.children[0];
				result.innerHTML = "";
				ball.style.transition = "top 0.1s";
				ball.style.animation = "stretch-ball 0.5s infinite alternate";
				ball.setAttribute("onmouseover","go(this)");
				toogle = 1;
			}
		}
	} ,1000);
};