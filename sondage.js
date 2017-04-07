$(document).ready(function(){
	$("#send").click(function(){
				var test = 1
		//traitement
		console.log("j'ai cliqué");
        console.log($("#message4").val());
		$("#content").val($("#message4").val());
	});
	$("#addButton").click(function(){
	    //traitement ;
		var reponsebody = $("#reponsetemplate");
		console.log(reponsebody);
		$("#reponses").append(reponsebody.clone());
;
		console.log (test);
		test ++;		
		
	});
});