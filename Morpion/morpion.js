$(document).ready(function(){
	console.log("click");
	$("td").click(function(e){
		console.log("click");
		console.log(e);
		$(e.currentTarget).html("X");
	});	
	
});