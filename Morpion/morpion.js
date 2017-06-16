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
			if (countHit === 9 ) {
				var result=isVictory();
				if (result=="X"){
					alert ("X a gagné");
					
				}else if (result=="O"){
					alert ("O a gagné");
				}else {
					alert ("match nul");

					
				}
			}
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
		countHit=0;
		console.log("reset");
		
  });
 function isVictory () {
 
 }
});