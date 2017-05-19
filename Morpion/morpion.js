$(document).ready(function(){
	var symbole="O";
	$("td").click(function(e){
		$(e.currentTarget).html(symbole);
		if(symbole==="X"){
			symbole="O";
		}
		else{
			symbole="X";
		}
	});	
	
});