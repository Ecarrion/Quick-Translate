var startX = ''; 
var StartY = '';
var endX = ''; 
var endY = '';
var key = '';

// Capture mouse start location
$(document).mousedown(function(e){
	startX = e.pageX;
	startY = e.pageY;
	
	delete_translation();
	delete_definition();
});

// Capture mouse end location
$(document).mouseup(function(e){
	endX = e.pageX;
	endY = e.pageY;
	
	delete_translation();
	delete_definition();	
});


//Listent for special key codes
$(document).keydown(function(e){
	key = e.keyCode;
	
	//84 is the ascii code for T character
	if(key == 84) {
	
	    var selected_text = window.getSelection().toString().trim();
	    if(selected_text != "") {
	        delete_definition();
	        show_translation(startX, startY, endX, endY, selected_text);
	    }
	}
	
	//68 is the ascii code for D character
	if(key == 68) {
	
	    var selected_text = window.getSelection().toString().trim();
	    if(selected_text != "") {
	        delete_translation();
	        show_definition(startX, startY, endX, endY, selected_text);
	    }
	}
	
});

$(document).keyup(function(e){
	key = '';
});
