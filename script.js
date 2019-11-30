var level = 45;
var started = true;
// $(function(){

	$(document).bind('keypress', function(e){
		if (e.keyCode == 97 && started || e.keyCode == 13 ) {
			level--;
			playLevel();

		}
	});


function playLevel(){
	$("#level-title").text(level);

}
