//Shows a translating tooltip
function show_translation(startX, startY, endX, endY, text){
    
    $('body').append("<div id='qt' class='quick-tooltip round'> Translating... </div>");
    $('div.quick-tooltip').css('top', startY - 40);
    $('div.quick-tooltip').css('left', startX);
    
    getTranslation(text);
}

function getTranslation(text_to_translate) {
    
    //Sends a request to the background_page to make the ajax translation
    chrome.extension.sendRequest({text: text_to_translate}, function(response) {
        $('#qt').text(response);
    }); 
}


//Delete the tooltip
function delete_translation(){
    $('div.quick-tooltip').remove();
}


