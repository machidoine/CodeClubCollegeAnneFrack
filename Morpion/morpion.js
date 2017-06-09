$(document).ready(function(){
	var nextSymbole="O";
	$("td").click(function(e){
		var currentValue = $(e.currentTarget).html();
		console.log(currentValue);
		if (currentValue==="") {
			swapNextSymbole();
			$(e.currentTarget).html(nextSymbole);
		}
		
	});	
	
	function swapNextSymbole() {
		if(nextSymbole==="X"){
			nextSymbole="O";
		}
		else{
			nextSymbole="X";
		}
	}
	
});