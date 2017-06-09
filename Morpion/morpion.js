$(document).ready(function(){
	var nextSymbole="O";
	var countHit = 0;
	$("td").click(function(e){
		var currentValue = $(e.currentTarget).html();
		console.log(currentValue);
		if (currentValue==="") {
			$(e.currentTarget).html(nextSymbole);
			swapNextSymbole();
			countHit++;
			console.log(countHit);
			
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
	
	$("#reset").click(function(){
		$("td").html("");
		nextSymbole="O";
		console.log("reset");
  });
});