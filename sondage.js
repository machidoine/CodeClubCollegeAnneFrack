$(document).ready(function(){
	$("#send").click(function(){
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
	});
});