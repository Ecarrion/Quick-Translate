// Capture mouse location
var startX = ''; 
var StartY = '';
var endX = ''; 
var endY = '';
var key = '';

$(document).mousedown(function(e){
	startX = e.pageX;
	startY = e.pageY;
	
	delete_tooltip();
});


$(document).mouseup(function(e){
	endX = e.pageX;
	endY = e.pageY;
	
	delete_tooltip();
	
	var selected_text = window.getSelection().toString();
	if(selected_text != "") {
	
	    //84 is the ascii code for T character
	    if(key == 84) {
	        test(startX, startY, endX, endY, selected_text);
	    }
	}
	
});

$(document).keydown(function(e){
	key = e.keyCode;
});

$(document).keyup(function(e){
	key = '';
});
