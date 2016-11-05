var boxSize = $('.hoverArea').width();
var defaultPixelsQuantity = 60;

$(document).ready(function(){
	fillYellowed(defaultPixelsQuantity);
//Size selection	
	$('#button').on('click', function(){
		defaultPixelsQuantity = prompt("Informe tamanho dos pixels");
		clearHoverArea();
	});
	
//Random color selection	
	$('#buttonRandom').on('click', function(){
		clearHoverArea();
		$(".pixels").mouseover(function() {
			$(this).css({"background-color": '#' + Math.random().toString(16).substring(2,8)});
		});
	});
})

function fillYellowed(userSize){
	var pixelsSize = boxSize/userSize;
	for(var i = 0; i < (userSize*userSize); i++){
			$('.hoverArea').append('<div class= "pixels"></div>');
	}
	$(".pixels").width(pixelsSize);
	$(".pixels").height(pixelsSize);
//Start hover area
	drawPixels();
}

function drawPixels(){
	$('.pixels').mouseover(function(){
		$(this).css("background-color", "#CACB12");
	});
}

function clearHoverArea(){
	$(".hoverArea").empty();
	fillYellowed(defaultPixelsQuantity);
}
