var startX = ''; 
var StartY = '';
var endX = ''; 
var endY = '';
var key = '';
var mouse_in_trans = false;
var mouse_in_def = false;

// Capture mouse start location
$(document).mousedown(function(e){
	startX = e.pageX;
	startY = e.pageY;
	
	if(!mouse_in_trans) delete_translation();
	if(!mouse_in_def) delete_definition();
});

// Capture mouse end location
$(document).mouseup(function(e){
	endX = e.pageX;
	endY = e.pageY;
	
	if(!mouse_in_trans) delete_translation();
	if(!mouse_in_def) delete_definition();	
});


//Checks whether the mouse is in or out the definition tooltip
function bind_qd(){
    $('#qd').hover(

        //inside
        function(){
            mouse_in_def = true;
        },
        
        //Outside
        function(){
            mouse_in_def = false;
        }
    );
}

//Checks whether the mouse is in or out the translation tooltip
function bind_qt(){
    $('#qt').hover(

        //inside
        function(){
            mouse_in_trans = true;
        },
        
        //Outside
        function(){
            mouse_in_trans = false;
        }
    );
}

//Listent for special key codes
$(document).keydown(function(e){
	key = e.keyCode;
	
	//84 is the ascii code for T character
	if(key == 84) {
	
	    var selected_text = window.getSelection().toString().trim();
	    if(selected_text != "") {
	        delete_translation();
	        delete_definition();
	        show_translation(startX, startY, endX, endY, selected_text);
	        bind_qt();
	    }
	}
	
	//68 is the ascii code for D character
	if(key == 68) {
	
	    var selected_text = window.getSelection().toString().trim();
	    if(selected_text != "") {
	        delete_translation();
	        delete_definition();
	        show_definition(startX, startY, endX, endY, selected_text);
	        bind_qd();
	    }
	}
	
});

$(document).keyup(function(e){
	key = '';
});
