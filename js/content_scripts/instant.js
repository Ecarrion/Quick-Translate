//Shows a translating tooltip
function show_translation(startX, startY, endX, endY, text){
    
    $('body').append("<div id='qt' class='quick-tooltip round'> Translating... </div>");
    $('div.quick-tooltip').css('top', startY - 40);
    $('div.quick-tooltip').css('left', startX);
    
    getTranslation(text);
}

function show_definition(startX, startY, endX, endY, text){
    
    $('body').append("<div id='qd' class='quick-tooltip round'> defining... </div>");
    $('div.quick-tooltip').css('top', startY + 15);
    $('div.quick-tooltip').css('left', startX);
    
    getDefinition(text);
}

function getTranslation(text_to_translate) {
    
    //Sends a request to the background_page to make the ajax translation
    chrome.extension.sendRequest({id:'translate', text: text_to_translate}, function(response) {
        $('#qt').text(response);
    }); 
}

function getDefinition(text_to_define) {
    
    //Sends a request to the background_page to make the ajax definition
    chrome.extension.sendRequest({id:'define', text: text_to_define}, function(response) {
        if(response != ""){
        
            //Show just the first definition.
            second_def_index = response.search('2:');
            if(second_def_index != -1){
                defined_text = response.substring(0, second_def_index);
            } else {
                defined_text = response;
            }
        
            $('#qd').text(defined_text);
        } else {
            $('#qd').text('Not found :(');
        }
    }); 
}


//Delete the translation tooltip
function delete_translation(){
    $('#qt').remove();
}

//Delete the definition tooltip
function delete_definition(){
    $('#qd').remove();
}


