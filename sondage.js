﻿(document).ready(function(){
	$("#send").click(function(){
		//traitement
		console.log("j'ai cliqué");
        console.log($("#message4").val());
		$("#content").val($("#message4").val());
	});
});