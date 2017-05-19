$(document).ready(function(){
	var symbole="O";
	$("td").click(function(e){
		$(e.currentTarget).html(symbole);
		var v= $(e.currentTarget).html();
		console.log(v);
		if(symbole==="X"){
			symbole="O";
		}
		else{
			symbole="X";
		}
	});	
	
});