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
});

// Capture mouse end location
$(document).mouseup(function(e){
	endX = e.pageX;
	endY = e.pageY;
	
	delete_translation();	
});


//Listent for special key codes
$(document).keydown(function(e){
	key = e.keyCode;
	
	//84 is the ascii code for T character
	if(key == 84) {
	
	    var selected_text = window.getSelection().toString().trim();
	    if(selected_text != "") {
	        show_translation(startX, startY, endX, endY, selected_text);
	    }
	}
});

$(document).keyup(function(e){
	key = '';
});
