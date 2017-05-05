$(document).ready(function(){
	$("#send").click(function(){
				
		//traitement
		console.log("j'ai cliqué");
        console.log($("#message4").val());
		$("#content").val($("#message4").val());
	});
	var test = 1
	$("#addButton").click(function(){
	    //traitement ;
		var reponsebody = $("#reponsetemplate");
		console.log(reponsebody);
		reponseBodyCloned = reponsebody.clone();
		reponseBodyCloned.find("span").html(test);
		$("#reponses").append(reponseBodyCloned);
;
		console.log (test);
		test ++;		
		
	});
});