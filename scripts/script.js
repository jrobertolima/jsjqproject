var boxSize = $('.hoverArea').width();
var defaultPixelsQuantity = 60;
var colorDefault = "#CACB12";

$(document).ready(function(){
	fillYellowed(defaultPixelsQuantity);
	
//Clear area selection	
	$('#clear').on('click', function(){
		defaultPixelsQuantity = 60;  //restore default size
		fillYellowed(defaultPixelsQuantity); //draw new area
	});

//Size selection	
	$('#size').on('click', function(){
		newSize();
	});
	
//Random color selection	
	$('#random').on('click', function(){
		fillYellowed(defaultPixelsQuantity);  //clean and redraw area before rainbow
		$(".pixels").mouseover(function() {
			$(this).css({"background-color": '#' + Math.random().toString(16).substring(2,8)});
		});
	});
})

function fillYellowed(userSize){
	var pixelsSize = boxSize/userSize;
    var sizeLimit = userSize*userSize;

	$(".hoverArea").empty();  //clean area

	for(var i = 0; i < sizeLimit; i++){
			$('.hoverArea').append('<div class="pixels"></div>');
	}
	$(".pixels").width(pixelsSize);
	$(".pixels").height(pixelsSize);
	
//Start hover area
	$('.pixels').mouseover(function(){
		$(this).css("background-color", colorDefault);
	});
}

//Redraw hover area with new size 
function newSize(){
		var input = prompt("Enter the number of rows (1-64)");
		var exit = false;
		do {
			if((input < 1) || (input > 64)){
				input = prompt("Please, enter a valid value or 'exit'");			
			}
			else if(input=="exit"){
				return; //exit without change the old values
			}	
			else{
				exit = true;
			}			
		}while (!exit)
		defaultPixelsQuantity = parseInt(input);// just in case of no integer values	
		fillYellowed(defaultPixelsQuantity); //draw new area
}
























