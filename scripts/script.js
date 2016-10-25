size = 0;
$(document).ready(function(){
	$('#button').on('click', function(){
		size = prompt("Informe tamanho dos pixels");
		alert(size);
		fillYellowed();
	})
})

function fillYellowed(){
/*		alert("INSIDE FILL "+size);
}	
*/	for(var i = 0; i < size; i++){
		for (var j = 0; j < size; j++){
			$(".wrapper".append($(".pixels"));
		}
	}
//	alert("Saindo FILL "+ i);
	
}

